
/* 
	Setup Active IC10 Editor(s)
*/
const localStorageKey = 'ic10-working';

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
function lexing() {
	const content = editor.getValue();
	localStorage.setItem(localStorageKey, content);
	editorOutput.setValue(StripIC10(content));
	editor.lexingTimeoutID = null;
};
editor.lexingTimeoutID = null;
editor.on("change", (ed, changeObj) => {
	if (editor.lexingTimeoutID != null)
		clearTimeout(editor.lexingTimeoutID);
	editor.lexingTimeoutID = setTimeout(lexing, 250);
});
editor.setValue(localStorage.getItem(localStorageKey) ?? "");
// editorOutput.setValue(StripIC10(editor.getValue()));
$('.copy-code-wrap').on("click", function (e) {
	if (e.which == 1) {
		navigator.clipboard.writeText(editorOutput.getValue());
	}
});
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

	Split([ ".code-container", ".code-container-out" ], {
		direction: 'horizontal',
		sizes: sizes,
		onDragEnd: function (sizes) {
			localStorage.setItem('split-sizes', JSON.stringify(sizes))
		},
	});
})

/* 
	Setup Split
*/

console.log("All loaded a-okay!");