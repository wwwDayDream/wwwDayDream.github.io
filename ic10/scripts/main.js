/* 
	Setup Active IC10 Editor(s)
*/

const localStorageKey = 'ic10-working';

var editorOutput = CodeMirror.fromTextArea(document.getElementById('code-out'), {
	firstLineNumber: 0,
	lineWrapping: true,
	lineNumbers: true,			// gives a lineNumber gutter
	mode: 'ic10',			// sets syntax mode
	theme: 'material',			// select theme
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
var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
  firstLineNumber: 0,
  lineWrapping: true,
	lineNumbers: true,			// gives a lineNumber gutter
	mode: 'ic10',			// sets syntax mode
	theme: 'material',			// select theme
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
function lexing() {
	const content = editor.getValue();
	localStorage.setItem(localStorageKey, content);
	editorOutput.setValue(StripIC10(content));
	//var tokens = (new IC10Lexer(content)).tokens;
	//var tokensStripped = IC10Stripper(tokens);
	//var newContent = IC10Detokenizer
	//editorOutput.setValue(IC10Stripper((new IC10Lexer()).eatScript(content).map(token => token.DATA).join));
	editor.lexingTimeoutID = null;
	const sourceScrollInfo = editor.getScrollInfo();
	editorOutput.scrollTo(sourceScrollInfo.left, sourceScrollInfo.top);
};
editor.lexingTimeoutID = null;
editor.on('change', (ed, changeObj) => {
	if (editor.lexingTimeoutID != null)
		clearTimeout(editor.lexingTimeoutID);
	editor.lexingTimeoutID = setTimeout(lexing, 250);
});
editor.on('keyHandled', (ed, name, event) => {
	console.log(ed, name, event);
})
editor.setValue(localStorage.getItem(localStorageKey) ?? '');
// editorOutput.setValue(StripIC10(editor.getValue()));
function syncScroll(sourceEditor, targetEditor) {
	sourceEditor.on('scroll', () => {
		const sourceScrollInfo = sourceEditor.getScrollInfo();
		targetEditor.scrollTo(sourceScrollInfo.left, sourceScrollInfo.top);
	});
}
syncScroll(editor, editorOutput);
syncScroll(editorOutput, editor);

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


// $('.left-side').toolbar( {
// 	content: '#left-file-toolbar-options',
// 	position: 'bottom'
// } );

// $('.left-side').on('toolbarItemClick', async function(event, button) {
// 	if (button.id == 'menu-copy') {
// 		navigator.clipboard.writeText(editorOutput.getValue());	
// 	} else if (button.id == 'menu-paste') {
// 		editor.setValue(await navigator.clipboard.readText());	
// 	} else if (button.id == 'menu-reset') {
// 		editor.setValue(`-keep space
// -keep comments
// -keep alias
// -keep labels
// -keep defines
// `);
// 	}
// });

console.log('All loaded a-okay!');