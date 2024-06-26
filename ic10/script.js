const localStorageKey = 'ic10-working';
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
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
editor.setValue(localStorage.getItem(localStorageKey) ?? "");
console.log(`Loaded ${editor.getValue().length} into editor.`)
var editorOutput = CodeMirror.fromTextArea(document.getElementById("code-out"), {
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
editorOutput.setValue(StripIC10(editor.getValue()));

editor.on("change", (ed, changeObj) => {
  const content = editor.getValue();
  localStorage.setItem(localStorageKey, content);
  editorOutput.setValue(StripIC10(content));
});

$('.copy-code-wrap').on("click", function (e) {
  if (e.which == 1) {
    navigator.clipboard.writeText(editorOutput.getValue());
  }
});

$(document).ready(function() {
  Split([ ".code-container", ".code-container-out" ], {
    direction: 'horizontal',
  });
})

console.log("All loaded a-okay!");