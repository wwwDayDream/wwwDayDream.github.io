/* 
	Setup Active IC10 Editor(s)
*/

const localStorageKey = 'ic10-working';
const defaultScript = `# The import preprocessor will import files saved via the top left button.
# You can open these files in the top left for example code and to see the default stripping processes
# Process can be defined inline in your ic10 code and it will be added as a new pass over the scripts lines
# Processes are a function with the arguments (line: String, state: [IC10Stripper Object])
import process.extensions
import process.whitespace
import process.comments
import process.lines
import process.aliases
import process.defines
import process.labels

alias idx r0 # var idx
alias device db # var device
define constant 2

# @process.extensions 
#  while(gt|ge|lt|le|eq|ne) (r?) (r?|num) (r?|num) (str) (r?|num) (label) (label)
#  while[?] index start end changeCMD amountChangePer call after
whilegt idx constant 0 sub 1 ForFunc ForEnd

ForFunc:
	s device Setting idx
	yield
	j ra
ForEnd:`;
var editorOutput;
var editor;
$(document).ready(function() {
	editorOutput = CodeMirror.fromTextArea(document.getElementById('code-out'), {
		firstLineNumber: 0,
		lineWrapping: true,
		lineNumbers: true,			// gives a lineNumber gutter
		mode: 'ic10',			// sets syntax mode
		theme: 'material-darker',			// select theme
		autoSize: true,
	
		indentUnit: 4,				// default is 2
		tabSize: 4,					// default already is 4
		indentWithTabs: true,		// default is false
	
		fixedGutter: true,
		coverGutterNextToScrollbar: true,
		showCursorWhenSelecting: true,
		electricChars: true,
		scrollbarStyle: null
	});
	editor = CodeMirror.fromTextArea(document.getElementById('code'), {
		firstLineNumber: 0,
		lineWrapping: true,
		lineNumbers: true,			// gives a lineNumber gutter
		mode: 'ic10',			// sets syntax mode
		theme: 'material-darker',			// select theme
	  	autoSize: true,
		
		indentUnit: 4,				// default is 2
		tabSize: 4,					// default already is 4
		indentWithTabs: true,		// default is false
		
		fixedGutter: true,
		coverGutterNextToScrollbar: true,
		showCursorWhenSelecting: true,
		electricChars: true,
	  	scrollbarStyle: null
	});
	async function strip() {
		const content = editor.getValue();
		localStorage.setItem(localStorageKey, content);
		const stripper = new IC10Stripper();
		editorOutput.setValue(await stripper.process(content));
		editor.stripTimeoutID = null;
		const sourceScrollInfo = editor.getScrollInfo();
		editorOutput.scrollTo(sourceScrollInfo.left, sourceScrollInfo.top);
	};
	editor.stripTimeoutID = null;
	editor.on('change', (ed, changeObj) => {
		if (editor.stripTimeoutID != null)
			clearTimeout(editor.stripTimeoutID);
		editor.stripTimeoutID = setTimeout(strip, 250);
	});
	editor.on('renderLine', (instance, line, element) => {
		var foundInstruction = null;
		var lastToken = null;
		var argNumber = 0;
		for (const child of element.children[0].children) {
			if (!foundInstruction && child.classList.contains('cm-bad-instruction') && element.children[0].children.length == 1) {
				var badMatch = UpdateReady.STATEMENTS.find(state => state.ident.startsWith(child.innerHTML));
				if (badMatch)
					InjectSuggestion(badMatch.ident.replace(child.innerHTML, ''));
			}
			if (foundInstruction) {
				var token = child.classList[0].split('-')[1];
				if ((token != 'hash' || lastToken != 'hash')) {
					lastToken = token
					argNumber++;
				}
			}
			if (!foundInstruction && child.classList.contains('cm-instruction'))
				foundInstruction = UpdateReady.STATEMENTS.find(st => st.ident == child.innerHTML);
		}
		if (foundInstruction != null && foundInstruction.args != null && foundInstruction.args.length > argNumber) {
			let args = foundInstruction.args[argNumber];
			InjectSuggestion(`(${args.length > 1 ? args.join('|') : args[0]})`);
		}
		
		return;
		function InjectSuggestion(content) {
			var newSpan = document.createElement('span');
			newSpan.innerHTML = content;
			newSpan.classList = [ 'cm-comment' ]
			element.children[0].append(newSpan);
		}
	});
	var initialValue = localStorage.getItem(localStorageKey) ?? '';
	editor.setValue(initialValue.length == 0 ? defaultScript : initialValue);
	// editorOutput.setValue(StripIC10(editor.getValue()));
	function syncScroll(sourceEditor, targetEditor) {
		sourceEditor.on('scroll', () => {
			const sourceScrollInfo = sourceEditor.getScrollInfo();
			targetEditor.scrollTo(sourceScrollInfo.left, sourceScrollInfo.top);
		});
	}
	syncScroll(editor, editorOutput);
	syncScroll(editorOutput, editor);
});

$(document).ready(function() {
	var sizes = localStorage.getItem('split-sizes')

	if (sizes) {
		sizes = JSON.parse(sizes)
	} else {
		sizes = [50, 50] // default sizes
	}

	SplitJS([ '.code-container', '.code-container-out' ], {
		direction: 'horizontal',
		sizes: sizes,
		onDragEnd: function (sizes) {
			localStorage.setItem('split-sizes', JSON.stringify(sizes))
		},
	});
	
	$("#menu").menu();

	// Click events for copy left and right
	$(".copy-left").click(function() {
	navigator.clipboard.writeText(editor.getValue());
	});

	$(".copy-right").click(function() {
	navigator.clipboard.writeText(editorOutput.getValue());
	});
	// Initialize dialog
	$("#filename-dialog").dialog({
		autoOpen: false,
		modal: true,
		close: function() {
		  $('#filename').val(''); // Clear the input field on close
		}
	  });
	
	  let currentAction = '';
	
	  // Populate file list
	  function populateFileList() {
		localForage.keys().then(function(keys) {
		  const fileList = $('#filename-dialog .file-list');
		  fileList.empty();
		  keys.forEach(function(key) {
			fileList.append(`
			  <li>
				<span class="file-name">${key}</span>
				<span class="delete-btn" data-filename="${key}">&times;</span>
			  </li>
			`);
		  });
		});
	  }
	
	  // Click event for file list items
	  $(document).on('click', '#filename-dialog .file-list li .file-name', function() {
		$('#filename').val($(this).text());
	  });
	
	  // Click event for delete buttons
	  $(document).on('click', '#filename-dialog .file-list li .delete-btn', function(event) {
		const filename = $(this).data('filename');
		localForage.removeItem(filename).then(function() {
		  populateFileList();
		});
		event.stopPropagation(); // Prevent triggering the parent click event
	  });
	
	  // Save file button event
	  $('.file-save').click(function() {
		currentAction = 'save';
		$("#filename-dialog").dialog("option", "buttons", {
		  "Save": function() {
			const filename = $('#filename').val();
			if (filename) {
			  localForage.setItem(filename, editor.getValue()).then(function() {
				populateFileList();
			  });
			  $(this).dialog("close");
			} else {
			  alert('Please enter a filename');
			}
		  },
		  "Cancel": function() {
			$(this).dialog("close");
		  }
		});
		populateFileList();
		$("#filename-dialog").dialog("open");
	  });
	
	  // Load file button event
	  $('.file-load').click(function() {
		currentAction = 'load';
		$("#filename-dialog").dialog("option", "buttons", {
		  "Load": function() {
			const filename = $('#filename').val();
			if (filename) {
				localForage.getItem(filename).then(function(value) {
				if (value) {
				  editor.setValue(value);
				  // Add your logic to handle the loaded file content here
				} else {
				  alert('File not found: ' + filename);
				}
			  });
			  $(this).dialog("close");
			} else {
			  alert('Please enter a filename');
			}
		  },
		  "Cancel": function() {
			$(this).dialog("close");
		  }
		});
		populateFileList();
		$("#filename-dialog").dialog("open");
	  });
	
	  // Initial population of file list
	  populateFileList();
})

$(document).ready(async function() {
	localForage.setItem('process.extensions', `process // Some glorious while patterns :D
	const WhilePattern = /[ \\t]*while([A-Za-z0-9.]+)[ \\t]+(.*)/;
	const match = line.match(WhilePattern);
	var args;
	if (match && (args = match[2].split(' ')).length >= 7) {
		const data = {target: args[0],start: args[1], end: args[2], each: args[3], eachArg: args[4], func: args[5], final: args[6]};
		return \`move \${data.target} \${data.start}\njal \${data.func}\n\${data.each} \${data.target} \${data.target} \${data.eachArg}\nbr\${match[1]} \${data.target} \${data.end} -2\nj \${data.final}\`;
	}
	return line;
end`)
	localForage.setItem('process.whitespace', `process
	// Remove starter whitespace
	if (line != null)
		line = line.trimStart(); // Trim extra whitespace

	var inQuotes = false;
	return line.split(' ').filter(str => {
		if (str.length == str.replace('"', '').length - 1) {
			inQuotes = !inQuotes;
		}
		if (inQuotes) return false;
		return str.length > 0;
	}).join(' ');
end`);
	localForage.setItem('process.comments', `process
	// Remove comments from lines
	var commentBegin = false;	
	if (line != null)
		line = line.split('').filter(char => !(commentBegin ||= char == '#')).join('');
	return line;
end`);
	localForage.setItem('process.lines', `process
	// Remove extra lines
	if (line != null)
		line = line.trim().length == 0 ? null : line;
	return line;
end`);
	localForage.setItem('process.aliases', `process
	state.aliases ??= [];
	const AliasPattern = /^alias[ \\t]+([A-Za-z0-9.]+)[ \\t]+((?:r(?:(?:r*(?:1[0-5]|[0-9]))|a))|(?:d(?:[0-5]|b|(?:r+(?:1[0-5]|[0-9])))))\\b/;
	var match;
	if (line != null && (match = line.match(AliasPattern)) != null) {
		state.aliases[match[1]] = match[2];
		return null;
	} else if (line != null)
		line = line.split(' ').map(arg => typeof(state.aliases[arg]) == 'string' ? state.aliases[arg] : arg).join(' ');
		
	return line;
end`);
	localForage.setItem('process.defines', `process
		
	// Replace define statements
	state.defines ??= [];
	const DefinePattern = /^define[ \\t]+([A-Za-z0-9.]+)[ \\t]+(.*)(?:[ \\t]|$)+/;
	var match;
	if (line != null && (match = line.match(DefinePattern)) != null) {
		state.defines[match[1]] = match[2];
		return null;
	} else if (line != null)
		line = line.split(' ').map(arg => typeof(state.defines[arg]) == 'string' ? state.defines[arg] : arg).join(' ');
		
	return line;
end`);
	localForage.setItem('process.labels', `process
	state.label ??= [];
	var match;
	if (match = line.match(/^[ \\t]*([A-Za-z0-9.]+):\\s?$/)) {
		state.label[match[1]] = state.line - state.linesSkipped;
		return null;
	}
	return line;
end
process
	state.label ??= [];
	return line.split(' ').map(arg => typeof(state.label[arg]) == 'number' ? state.label[arg] : arg).join(' ');
end`);
});