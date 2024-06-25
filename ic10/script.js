CodeMirror.defineMode("ic10", function() {
  const instructions = [ "abs", "acos", "add", "and", "asin", "atan", "atan2", "bap", "bapal", "bapz", "bapzal", "bdns", "bdnsal", "bdse", "bdseal", "beq", "beqal", "beqz", "beqzal", "bge", "bgeal", "bgez", "bgezal", "bgt", "bgtal", "bgtz", "bgtzal", "ble", "bleal", "blez", "blezal", "blt", "bltal", "bltz", "bltzal", "bna", "bnaal", "bnan", "bnaz", "bnazal", "bne", "bneal", "bnez", "bnezal", "brap", "brapz", "brdns", "brdse", "breq", "breqz", "brge", "brgez", "brgt", "brgtz", "brle", "brlez", "brlt", "brltz", "brna", "brnan", "brnaz", "brne", "brnez", "ceil", "clr", "clrd", "cos", "div", "exp", "floor", "get", "getd", "hcf", "j", "jal", "jr", "l", "lb", "lbn", "lbns", "lbs", "ld", "log", "lr", "ls", "max", "min", "mod", "move", "mul", "nor", "not", "or", "peek", "poke", "pop", "push", "put", "putd", "rand", "rmap", "round", "s", "sap", "sapz", "sb", "sbn", "sbs", "sd", "sdns", "sdse", "select", "seq", "seqz", "sge", "sgez", "sgt", "sgtz", "sin", "sla", "sle", "sleep", "slez", "sll", "slt", "sltz", "sna", "snan", "snanz", "snaz", "sne", "snez", "sqrt", "sra", "srl", "ss", "sub", "tan", "trunc", "xor", "yield" ];
  const regex = {
    comment: /(#.*$)/,
    registers: /r(1[0-5]|[0-9])\b/,
    devices: /d([0-5]|b)/,
    genericNumbers: /(?:%|\$|-|[0-9]).*/,
    regularNumbers: /(?:(\$(?:[A-F]|[0-9]|_)+)|(?:%(?:[01]|_)+)|(?:[+-]?([0-9]*[.])?[0-9]+))/,
    preHash: /(HASH\(".*)/,
    postHash: /.*"\)/
  };
  const tokenTypes = {
    comments: "comment",
    registers: "keyword",
    devices: "keyword",
    numbers: "number",
    hash: "string"
  };
  return {
    startState: () => {
      return {
        processToken: (stream) => {
          if (stream.match(regex.comment)) return tokenTypes.comments;
          if (stream.eatSpace()) return null;
          if (stream.sol()) this.lastTokenType == null;
          
          while (stream.peek() != ' ' && stream.peek() != null)
            stream.next();
          
          const registersMatch = stream.current().match(regex.registers);
          if (registersMatch != null && registersMatch[0] == stream.current()) return tokenTypes.registers;
          
          const devicesMatch = stream.current().match(regex.devices);
          if (devicesMatch != null && devicesMatch[0] == stream.current()) return tokenTypes.devices;
          
          const numbersMatch = stream.current().match(regex.genericNumbers);
          if (numbersMatch != null && stream.current().startsWith(numbersMatch[0])) {
            const regularMatch = stream.current().match(regex.regularNumbers);
            const matchesRegNumber = regularMatch != null && regularMatch[0] == stream.current();
            return matchesRegNumber ? tokenTypes.numbers : `${tokenTypes.numbers} error`;
          }
          
          const hashMatch = stream.current().match(regex.preHash);
          if (hashMatch != null && hashMatch[0] == stream.current()) {
            const aheadMatch = stream.match(regex.postHash, false) ?? stream.current().match(regex.postHash);
            if (aheadMatch == null) return `${tokenTypes.hash} error`;
            stream.backUp(stream.current().length - 'HASH('.length);
            return tokenTypes.hash;
          }
          stream.next();
          return null;
        }
      };
    },
    token: (stream, state) => {
      state.lastToken = stream.current();
      state.lastTokenType = state.processToken(stream);
      return state.lastTokenType;
    }
  };
});

CodeMirror.defineSimpleMode("ic10+", {
  start: [
    { regex: /(#.*$)/, token: "comment" },
    { regex: /r(1[0-5]|[0-9])/, token: "keyword"},
    { regex: /d([0-5]|b)/, token: "keyword"},
    { regex: /(HASH\(".*"\))|((?:\$(?:[A-F]|[0-9]|_)+)|(?:%(?:[01]|_)+)|(?:(?:-|[^-\w\d$%])[0-9]+))/,
     token: [ "comment", "number"] },
    { regex: /\s*(\w+:)/, sol: true, token: "variable-2" },
    { regex: /\s*(abs|acos|add|alias|and|asin|atan|atan2|bap|bapal|bapz|bapzal|bdns|bdnsal|bdse|bdseal|beq|beqal|beqz|beqzal|bge|bgeal|bgez|bgezal|bgt|bgtal|bgtz|bgtzal|ble|bleal|blez|blezal|blt|bltal|bltz|bltzal|bna|bnaal|bnan|bnaz|bnazal|bne|bneal|bnez|bnezal|brap|brapz|brdns|brdse|breq|breqz|brge|brgez|brgt|brgtz|brle|brlez|brlt|brltz|brna|brnan|brnaz|brne|brnez|ceil|clr|clrd|cos|debug|define|div|exp|floor|get|getd|hcf|j|jal|jr|l|lb|lbn|lbns|lbs|ld|log|lr|ls|max|min|mod|move|mul|nor|not|or|peek|poke|pop|push|put|putd|rand|rmap|round|s|sap|sapz|sb|sbn|sbs|sd|sdns|sdse|select|seq|seqz|sge|sgez|sgt|sgtz|sin|sla|sle|sleep|slez|sll|slt|sltz|sna|snan|snanz|snaz|sne|snez|sqrt|sra|srl|ss|sub|tan|trunc|xor|yield)\b/, token: "variable", sol: true },
    { regex: /\s*keep\s.*$/, sol: true, token: "variable-3"}
  ]
})

function StripIC10(code) {
    const definitions = {};
    const aliases = {};
    const labels = {};

    const strippedContent = [];

    const codeSplit = code.split('\n');

    index = 0;
    var keepSpace = false;
    var keepComments = false;
    var keepAliases = false;
    var keepDefines = false;
    var keepLabels = false;
    for (var item of codeSplit) {
        var evalItem = item.trim();
        item = keepSpace ? item : evalItem;
        if (evalItem.length == 0 && !keepSpace) continue;
        var itemSplit = evalItem.split(' ');
        var leader = itemSplit[0];
        if (leader == 'keep') {
          var follower = itemSplit[1];
          switch (follower.toLowerCase()) {
            case "space":
              keepSpace = true;
              break;
            case "comments":
              keepComments = true;
              break;
            case "alias":
              keepAliases = true;
              break;
            case "labels":
              keepLabels = true;
              break;
            case "defines":
              keepDefines = true;
              break;
            default:
              break;
          }
          continue;
        }
        if (leader == '#' && !keepComments) continue;
        if (leader == 'alias' && !keepAliases) {
            aliases[itemSplit[1]] = itemSplit[2].trim();
            continue;
        }
        if (leader == 'define' && !keepDefines){
            definitions[itemSplit[1]] = itemSplit[2].trim();
            continue;
        }
        if (leader.endsWith(':') && !keepLabels) {
            labels[itemSplit[0].replace(':', '')] = index;
            continue;
        }
        strippedContent.push(item);
        index++
    }

    return strippedContent
        .map(item => {
            var hashed = false;
            return item.split(' ')
                .filter(subItem => {
                    hashed = hashed || (subItem == '#');
                    return keepComments || !hashed;
                })
                .map(subItem => {
                    const regexp = /^(?<content>.+?)(?:\*(?<repeatCount>\d+))?$/;
                    const match = regexp.exec(subItem);

                    if (match == null) return;
                    var content = match.groups.content;
                    var repeatCount = 0;
                    if (match.groups.repeatCount != undefined) {
                        repeatCount = parseInt(match.groups.repeatCount.replace('*', ''));
                        content.replace(match.groups.repeatCount, '');
                    }

                    if (definitions[content] != undefined)
                        content = definitions[content];
                    if (aliases[content] != undefined)
                        content = aliases[content];
                    if (labels[content] != undefined)
                        content = labels[content];

                    return repeatCount > 0 ? `${content} `.repeat(repeatCount).trim() : content;
                }).join(' ')
        })
        .join('\n');
}

const localStorageKey = 'ic10-working';
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
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

document.querySelector('.copy-code-wrap').onclick = function (e) {
	if (e.which == 1) {
		navigator.clipboard.writeText(editorOutput.getValue());

		// animate the button
		var copy = document.querySelector(".copy-code", this);
		function quickadd() {
			copy.classList.add("animate");
			setTimeout(function () {
				copy.classList.remove("animate");
			}, 200);
		}
		quickadd();
	}
};