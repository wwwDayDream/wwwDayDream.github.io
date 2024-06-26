const UpdateReady = {
    CONSTANTS: [ 'nan','pinf','ninf','pi','deg2rad','rad2deg','epsilon' ],
    BATCHMODES: [ 'Average','Sum','Minimum','Maximum','0','1','2','3' ],
    REAGENTMODES: [ 'Contents','Required','Recipe','0','1','2' ],
    STATEMENTS: [
        {ident: 'abs', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'acos', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'add', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'alias', 
                    args: [ ['str'], ['r?', ['d?']] ]},
        {ident: 'and', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'asin', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'atan', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'atan2', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'bap', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bapal', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bapz', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bapzal', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bdns', 
                    args: [ ['d?'], ['r?','int'] ]},
        {ident: 'bdnsal', 
                    args: [ ['d?'], ['r?','int'] ]},
        {ident: 'bdse', 
                    args: [ ['d?'], ['r?','int'] ]},
        {ident: 'bdseal', 
                    args: [ ['d?'], ['r?','int'] ]},
        {ident: 'beq', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'beqal', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'beqz', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'beqzal', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'bge', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bgeal', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bgez', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'bgezal', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'bgt', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bgtal', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bgtz', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'bgtzal', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'ble', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bleal', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'blez', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'blezal', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'blt', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bltal', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bltz', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'bltzal', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'bna', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bnaal', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bnan', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'bnaz', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bnazal', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bne', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bneal', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'bnez', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'bnezal', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'brap', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'brapz', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'brdns', 
                    args: [ ['d?'], ['r?','int'] ]},
        {ident: 'brdse', 
                    args: [ ['d?'], ['r?','int'] ]},
        {ident: 'breq', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'breqz', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'brge', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'brgez', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'brgt', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'brgtz', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'brle', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'brlez', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'brlt', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'brltz', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'brna', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'brnan', 
                    args: [ ['r?','num'], ['r?','int'] ]},
        {ident: 'brnaz', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'brne', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','int'] ]},
        {ident: 'brnez', 
                    args: [ ['r?','int'] ]},
        {ident: 'ceil', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'clr', 
                    args: [ ['d?'] ]},
        {ident: 'clrd', 
                    args: [ ['r?','num'] ]},
        {ident: 'cos', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'define', 
                    args: [ ['str'], 'num' ]},
        {ident: 'div', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'exp', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'floor', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'get', 
                    args: [ ['r?'], ['d?'], ['r?','num'] ]},
        {ident: 'getd', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'hcf'},
        {ident: 'j', 
                    args: [ ['int'] ]},
        {ident: 'jal', 
                    args: [ ['int'] ]},
        {ident: 'jr', 
                    args: [ ['int'] ]},
        {ident: 'l', 
                    args: [ ['r?'], ['d?'], ['logicType'] ]},
        {ident: 'lb', 
                    args: [ ['r?'], ['r?','num'], ['logicType'], ['batchMode'] ]},
        {ident: 'lbn', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'], ['logicType'], ['batchMode'] ]},
        {ident: 'lbns', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'], ['logicSlotType'], ['batchMode'] ]},
        {ident: 'lbs', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'], ['logicSlotType'], ['batchMode'] ]},
        {ident: 'ld', 
                    args: [ ['r?'], ['r?','num'], ['logicType'] ]},
        {ident: 'log', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'lr', 
                    args: [ ['r?'], ['d?'], ['reagentMode'] ]},
        {ident: 'ls', 
                    args: [ ['r?'], ['d?'], ['int'], ['logicSlotType'] ]},
        {ident: 'max', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'min', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'mod', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'move', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'mul', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'nor', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'not', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'or', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'peek', 
                    args: [ ['r?']  ]},
        {ident: 'poke', 
                    args: [ ['r?','num'], ['r?','num'] ]},
        {ident: 'pop', 
                    args: [ ['r?'] ]},
        {ident: 'push', 
                    args: [ ['r?','num'] ]},
        {ident: 'put', 
                    args: [ ['d?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'putd', 
                    args: [ ['r?','num'], ['r?','num'], ['r?','num'] ]},
        {ident: 'rand', 
                    args: [ ['r?'] ]},
        {ident: 'rmap', 
                    args: [ ['r?'], ['d?'], ['r?','num'] ]},
        {ident: 'round', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 's', 
                    args: [ ['d?'], ['logicType'], ['r?'] ]},
        {ident: 'sap', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'], ['r?','num'] ]},
        {ident: 'sapz', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'sb', 
                    args: [ ['r?','num'], ['logicType'], ['r?'] ]},
        {ident: 'sbn', 
                    args: [ ['r?','num'], ['r?','num'], ['logicType'], ['r?'] ]},
        {ident: 'sbs', 
                    args: [ ['r?','num'], ['r?','num'], ['logicSlotType'], ['r?'] ]},
        {ident: 'sd', 
                    args: [ ['r?','num'], ['logicType'], ['r?'] ]},
        {ident: 'sdns', 
                    args: [ ['r?'], ['d?'] ]},
        {ident: 'sdse', 
                    args: [ ['r?'], ['d?'] ]},
        {ident: 'select', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'], ['r?','num'] ]},
        {ident: 'seq', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'seqz', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'sge', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'sgez', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'sgt', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'sgtz', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'sin', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'sla', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'sle', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'sleep', 
                    args: [ ['r?','num'] ]},
        {ident: 'slez', 
                    args: [ ['r?'] ]},
        {ident: 'sll', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'slt', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'sltz', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'sna', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'], ['r?','num'] ]},
        {ident: 'snan', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'snanz', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'snaz', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'sne', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'snez', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'sqrt', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'sra', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'srl', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'ss', 
                    args: [ ['d?'], ['r?','num'], ['logicSlotType'], ['r?'] ]},
        {ident: 'sub', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'tan', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'trunc', 
                    args: [ ['r?'], ['r?','num'] ]},
        {ident: 'xor', 
                    args: [ ['r?'], ['r?','num'], ['r?','num'] ]},
        {ident: 'yield'}
    ]
}


let lexer = moo.compile({
    WS:      /[ \t]+/,
    comment: /\/\/.*?$/,
    number:  /0|[1-9][0-9]*/,
    string:  /"(?:\\["\\]|[^\n"\\])*"/,
    lparen:  '(',
    rparen:  ')',
    keyword: ['while', 'if', 'else', 'moo', 'cows'],
    NL:      { match: /\n/, lineBreaks: true },
  })
// @ts-check
const ElementTypes = { Regex: 'r', Element: 'e'}
const IC10 = {
    // `r` gets parsed as a regex
    // `e` gets addressed by the content
    elementAliases: { 'r?': 'regs', 'd?': 'devs', 'logicType': 'str', 'logicSlotType': 'str' },
    elements: {
        str: [
            { id: 'Raw', 
                type: ElementTypes.Regex, content: /^([A-Za-z0-9.]+)$/ }
        ],
        regs: [
            { id: 'RegisterConstant', 
                type: ElementTypes.Regex, content: /^r(1[0-5]|[0-9]|a)$/ },
            { id: 'RegisterAlias', 
                type: ElementTypes.Element, content: 'str' }
        ],
        devs: [
            { id: 'DeviceConstant',
                type: ElementTypes.Regex, content: /^d([0-5]|b)$/ },
            { id: 'DeviceAlias', 
                type: ElementTypes.Element, content: 'str' }
        ],
        num: [
            { id: 'NumberConstantHash', 
                type: ElementTypes.Regex, content: /^((?:HASH\((?='.*'\))))$/},
            { id: 'NumberConstantDec', 
                type: ElementTypes.Regex, content: /^([-]?(?:[0-9]+[.][0-9]+))$/ },
            { id: 'NumberConstantPreDefined', 
                type: ElementTypes.Regex, content: new RegExp(`^(${UpdateReady.CONSTANTS.join('|')})$`, 'i') },
            { id: 'NumberConstantDefine', 
                type: ElementTypes.Element, content: 'str' },
            { id: 'NumberConstantInt', 
                type: ElementTypes.Element, content: 'int' }
        ],
        int: [
            { id: 'IntConstantHex', 
                type: ElementTypes.Regex, content: /^\$((?:(?:_(?=_*(?:[0-9]|[A-F]|[a-f])))|(?:[0-9]|[A-F]|[a-f]))(?:[0-9]|[A-F]|[a-f]|_)*)$/ },
            { id: 'IntConstantBinary', 
                type: ElementTypes.Regex, content: /^%((?:(?:_(?=_*[01]))|(?:[01]))[01_]*)$/ },
            { id: 'IntConstantDec', 
                type: ElementTypes.Regex, content: /^([-]?[0-9]+)$/ },
            { id: 'IntConstantLabel', 
                type: ElementTypes.Element, content: 'str' }
        ],
        batchMode: [
            { id: 'BatchModeConstant', 
                type: ElementTypes.Regex, content: new RegExp(`^(${UpdateReady.BATCHMODES.join('|')})$`) }
        ],
        reagentMode: [
            { id: 'ReagentModeConstant', 
                type: ElementTypes.Regex, content: new RegExp(`^(${UpdateReady.REAGENTMODES.join('|')})$`) }
        ],
        label: [
            { id: 'LabelEntry',
                type: ElementTypes.Regex, content: /^([A-Za-z0-9.]+):$/ }
        ]
    },
    LoopElements(callback) {
        for (const key of Object.keys(this.elements)) {
            const element = this.elements[key]
            callback(key, element);
        }
    },
    state: {
        current: '',
        resetAfterToken: () => {
            this.current = '';
        }
    },
    ParseASTByChar(ch, nextCh) {
        if (ch != null)
            this.state.current = this.state.current + ch;

        const ret = ((char, nextChar, state) => {
            if (state.in === 'sol' && char === ' ' && nextChar !== ' ') return 'Spaces';
    
            if (char === '#') {
                state.in = 'comment';
            }
    
            if (state.in === 'sol' && char !== ' ') state.in = 'reading';
            
            if (state.in === 'reading' && (nextChar === ' ' || nextChar == null)) {
                const trimmedCurrent = state.current.trim();
                for (const statement of UpdateReady.STATEMENTS) {
                    if (trimmedCurrent === statement.ident) {
                        state.statement = statement;
                        state.in = 'statement';
                        return 'Statement';
                    }
                }
                if (trimmedCurrent.endsWith(':')) {
                    state.in = 'term';
                    return 'LabelEntry';
                }
                state.in = 'term';
                return 'Invalid';
            }
    
            if (state.in === 'statement') {
                if (char === ' ' && nextChar !== ' ') {
                    state.in = 'arg';
                    return 'ArgStart';
                }
            }
    
            if (state.in === 'arg') {
                if (char !== ' ' && (nextChar === ' ' || nextChar == null || nextChar === ',')) {
                    const trimmedCurrent = state.current.trim();
                    let matchedElement = null;
    
                    this.LoopElements((key, elements) => {
                        for (const element of elements) {
                            if (element.type === ElementTypes.Regex && element.content.test(trimmedCurrent)) {
                                matchedElement = key;
                                break;
                            } else if (element.type === ElementTypes.Element && this.elementAliases[element.content] === key) {
                                matchedElement = key;
                                break;
                            }
                        }
                    });
    
                    if (matchedElement) {
                        state.in = nextChar === ',' ? 'arg' : 'statement';
                        return `Arg(${matchedElement})`;
                    } else {
                        state.in = 'invalid';
                        return 'InvalidArg';
                    }
                }
            }

            // End of Line
            if (char == null) {
                var lastMinuteReturns = null;
                if (state.in == 'comment' && state.current.length > 0) 
                    lastMinuteReturns = 'Comment';
                state.in = 'sol';
                state.current = '';
                return lastMinuteReturns;
            }
            if (nextChar == '#' && state.current.length != 0) {
                return 'Invalid';
            }
            if (char == null) {
            }
            return null;
        })(ch, nextCh, this.state);
        if (ret != null) {
            this.state.resetAfterToken();
        }
        return ret;
    }
};



// @ts-ignore
CodeMirror.defineMode('ic10', function() {
    const tokenTypes = {
        Spaces: null,
        Raw: null,
        Invalid: 'error',
        Comment: 'comment',
        Statement: 'variable',
        RegisterConstant: 'keyword',
        RegisterAlias: 'string',
        DeviceConstant: 'keyword',
        DeviceAlias: 'string',
        NumberConstantHash: 'comment',
        NumberConstantDec: 'number',
        NumberConstantPreDefined: 'variable-3',
        NumberConstantDefine: 'string',
        NumberConstantInt: 'number',
        IntConstantHex: 'number',
        IntConstantBinary: 'number',
        IntConstantDec: 'number',
        IntConstantLabel: 'variable-2',
        BatchModeConstant: 'variable-3',
        ReagentModeConstant: 'variable-3',
        LabelEntry: 'variable-2'
    };
    return {
        startState: () => {
            return {
            };
        },
        token: (stream, state) => {
            var char = stream.peek();
            var token = null;
            do {
                char = stream.next();
                token = IC10.ParseASTByChar(char, stream.peek(), state);
            } while (char != null && token == null)
            if (token != null) return tokenTypes[token];
        }
    };
});
  
function StripIC10(code) {
    const definitions = {};
    const aliases = {};
    const labels = {};

    const strippedContent = [];

    const codeSplit = code.split('\n');

    // @ts-ignore
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
            case 'space':
              keepSpace = true;
              break;
            case 'comments':
              keepComments = true;
              break;
            case 'alias':
              keepAliases = true;
              break;
            case 'labels':
              keepLabels = true;
              break;
            case 'defines':
              keepDefines = true;
              break;
            default:
              break;
          }
          continue;
        }
        if (leader == '#' && !keepComments) continue;
        if (leader == 'alias' && itemSplit.length > 2 && !keepAliases) {
            aliases[itemSplit[1]] = itemSplit[2].trim();
            continue;
        }
        if (leader == 'define' && itemSplit.length > 2 && !keepDefines){
            definitions[itemSplit[1]] = itemSplit[2].trim();
            continue;
        }
        if (leader.endsWith(':') && !keepLabels) {
            // @ts-ignore
            labels[itemSplit[0].replace(':', '')] = index;
            continue;
        }
        strippedContent.push(item);
        // @ts-ignore
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
                    // @ts-ignore
                    var content = match.groups.content;
                    var repeatCount = 0;
                    // @ts-ignore
                    if (match.groups.repeatCount != undefined) {
                        // @ts-ignore
                        repeatCount = parseInt(match.groups.repeatCount.replace('*', ''));
                        // @ts-ignore
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
