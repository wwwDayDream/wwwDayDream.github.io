/* 
	Setup Active IC10 Editor(s)
*/

const localStorageKey = 'ic10-working';
const defaultScript = `import process.extensions # The import preprocessor will import files saved via the top left button.
import process.defaults # You can open these files in the top left for example code and to see the default stripping processes
import process.labels # Process can be defined inline in your ic10 code and it will be added as a new pass over the scripts lines
# Processes are a function with the arguments (line: String, state: [IC10Stripper Object])

alias idx r0 # var idx
alias device db # var device
define constant 2

move idx 0 # idx = 0
ForLoop:
	add idx idx 1 # idx++
	blt idx constant ForLoop # if (idx < 2) continue; else break;`;
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
		readOnly: 'nocursor',
	
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
	localForage.setItem('process.extensions', `process // Some glorious for patterns :D
	const ForPattern = /[ \\t]*for([A-Za-z0-9.]+)[ \\t]+(.*)/;
	const match = line.match(ForPattern);
	var args;
	if (match && (args = match[2].split(' ')).length >= 7) {
		const data = {target: args[0],start: args[1], end: args[2], each: args[3], eachArg: args[4], func: args[5], final: args[6]};
		return \`move \${data.target} \${data.start}\njal \${data.func}\n\${data.each} \${data.target} \${data.target} \${data.eachArg}\nbr\${match[1]} \${data.target} \${data.end} -2\nj \${data.final}\`;
	}
	return line;
end`)
	localForage.setItem('process.defaults', `process
	// Remove starter whitespace
	if (line != null)
		line = line.trimStart(); // Trim extra whitespace
		
	// Remove comments from lines
	var commentBegin = false;	
	if (line != null)
		line = line.split('').filter(char => !(commentBegin ||= char == '#')).join('');
		
	// Remove extra lines
	if (line != null)
		line = line.trim().length == 0 ? null : line;
		
	// Replace alias and define statements
	state.aliases ??= [];
	state.defines ??= [];
	const AliasPattern = /^alias[ \\t]+([A-Za-z0-9.]+)[ \\t]+((?:r(?:(?:r*(?:1[0-5]|[0-9]))|a))|(?:d(?:[0-5]|b|(?:r+(?:1[0-5]|[0-9])))))\\b/;
	const DefinePattern = /^define[ \\t]+([A-Za-z0-9.]+)[ \\t]+(.*)(?:[ \\t]|$)+/;
	var match;
	if (line != null && (match = line.match(AliasPattern)) != null) {
		state.aliases[match[1]] = match[2];
		return null;
	} else if (line != null && (match = line.match(DefinePattern)) != null) {
		state.defines[match[1]] = match[2];
		return null;
	} else if (line != null)
		line = line.split(' ').map(arg => state.aliases[arg] != null ? state.aliases[arg] : state.defines[arg] != null ? state.defines[arg] : arg).join(' ');
		
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
	return line.split(' ').map(arg => state.label[arg] != null ? state.label[arg] : arg).join(' ');
end`);
});