
CodeMirror.defineSimpleMode("ic10+", {
  start: [
    { regex: /(#.*$)/, token: "comment" },
    { regex: /r(1[0-5]|[0-9])/, token: "keyword"},
    { regex: /d([0-5]|b)/, token: "keyword"},
    { regex: /(HASH\(".*"\))|((?:\$(?:[A-F]|[0-9]|_)+)|(?:%(?:[01]|_)+)|(?:(?:-|[^-\w\d$%])[0-9]+))/,
     token: [ "comment", "number"] },
    { regex: /\s*(\w+:)/, sol: true, token: "variable" },
    { regex: /\s*(abs|acos|add|alias|and|asin|atan|atan2|bap|bapal|bapz|bapzal|bdns|bdnsal|bdse|bdseal|beq|beqal|beqz|beqzal|bge|bgeal|bgez|bgezal|bgt|bgtal|bgtz|bgtzal|ble|bleal|blez|blezal|blt|bltal|bltz|bltzal|bna|bnaal|bnan|bnaz|bnazal|bne|bneal|bnez|bnezal|brap|brapz|brdns|brdse|breq|breqz|brge|brgez|brgt|brgtz|brle|brlez|brlt|brltz|brna|brnan|brnaz|brne|brnez|ceil|clr|clrd|cos|debug|define|div|exp|floor|get|getd|hcf|j|jal|jr|l|lb|lbn|lbns|lbs|ld|log|lr|ls|max|min|mod|move|mul|nor|not|or|peek|poke|pop|push|put|putd|rand|rmap|round|s|sap|sapz|sb|sbn|sbs|sd|sdns|sdse|select|seq|seqz|sge|sgez|sgt|sgtz|sin|sla|sle|sleep|slez|sll|slt|sltz|sna|snan|snanz|snaz|sne|snez|sqrt|sra|srl|ss|sub|tan|trunc|xor|yield)\b/, token: "variable", sol: true },
    { regex: /\s*keep\s.*$/, sol: true, token: "variable-3"}
  ]
})

const localStorageKey = 'ic10-working';
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
	lineNumbers: true,			// gives a lineNumber gutter
	mode: 'ic10+',			// sets syntax mode
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
	lineNumbers: true,			// gives a lineNumber gutter
	mode: 'ic10+',			// sets syntax mode
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

$('.copy-code-wrap').onclick = function (e) {
	if (e.which == 1) {
		navigator.clipboard.writeText(editorOutput.getValue());

		// animate the button
		var copy = $(".copy-code", this);
		function quickadd() {
			copy.classList.add("animate");
			setTimeout(function () {
				copy.classList.remove("animate");
			}, 200);
		}
		quickadd();
	}
};

$(document).ready(function() {
  Split([ ".code-container", ".code-container-out" ], {
    direction: 'horizontal',
  })
})


console.log("All loaded a-okay!");