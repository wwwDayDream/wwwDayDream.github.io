const UpdateReady = {
    CONSTANTS: [ 'nan','pinf','ninf','pi','deg2rad','rad2deg','epsilon' ],
    BATCHMODES: [ 'Average','Sum','Minimum','Maximum' ],
    REAGENTMODES: [ 'Contents','Required','Recipe' ],
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

// @ts-check
class Token {
    constructor(TOKEN, DATA, LINE) {
        this.ID = `TT_${TOKEN}`;
        this.DATA = DATA;
        this.LINE = LINE;
    }
    toString() {
        return JSON.stringify(this);
    }
}

// Extension Function
RegExp.prototype.matchesAll = function(target) {
    const match = this.exec(target);
    return match != null && match[0] == target;
}

class IC10Lexer {
    REGEX = {
        REGISTERS: /r((?:r*(?:1[0-5]|[0-9]))|a)/,
        DEVICES: /d([0-5]|b|(?:r+(?:1[0-5]|[0-9])))/,
        STACKPOINTER: /sp/,
        NUM_CONST: new RegExp(`^(${UpdateReady.CONSTANTS.join('|')})$`, 'i'),
        NUM_DEC: /([-]?(?:[0-9]+[.][0-9]+))/,
        NUM_HASH: /(".+")/,
        INT_DEC: /([-]?[0-9]+)/,
        INT_HEX: /\$((?:(?:_(?=_*(?:[0-9]|[A-F]|[a-f])))|(?:[0-9]|[A-F]|[a-f]))(?:[0-9]|[A-F]|[a-f]|_)*)/,
        INT_BIN: /%((?:(?:_(?=_*[01]))|(?:[01]))[01_]*)/,
        BATCH_MODE: new RegExp(`^(${UpdateReady.BATCHMODES.join('|')})$`),
        REAG_MODE: new RegExp(`^(${UpdateReady.REAGENTMODES.join('|')})$`),
        ALIAS: /([A-Za-z0-9.]+)/
    }
    STATES = {
        EOL: function() {
            if (this.eol)
                this.yield('UNKNOWN');
        },
        ARG: function() {
            if (this.char == ' ') {
                this.transition('SPACES')
            } else if (this.char == '#') {
                this.transition('COMMENT');
            } else if (this.current == 'HASH(') {
                this.transition('HASH');
            } else if (this.nextChar == ' ' || this.nextChar == '#' || this.eol)
            {
                if (this.REGEX.REGISTERS.matchesAll(this.current))
                    this.yield('REGISTER');
                else if (this.REGEX.DEVICES.matchesAll(this.current))
                    this.yield('DEVICE');
                else if (this.REGEX.STACKPOINTER.matchesAll(this.current))
                    this.yield('STACKPOINTER');
                else if (this.REGEX.NUM_CONST.matchesAll(this.current))
                    this.yield('NUM_CONST');
                else if (this.REGEX.NUM_DEC.matchesAll(this.current))
                    this.yield('NUM_DEC');
                else if (this.REGEX.INT_DEC.matchesAll(this.current))
                    this.yield('INT_DEC');
                else if (this.REGEX.INT_HEX.matchesAll(this.current))
                    this.yield('INT_HEX');
                else if (this.REGEX.INT_BIN.matchesAll(this.current))
                    this.yield('INT_BIN');
                else if (this.REGEX.BATCH_MODE.matchesAll(this.current))
                    this.yield('BATCH_MODE');
                else if (this.REGEX.REAG_MODE.matchesAll(this.current))
                    this.yield('REAG_MODE');
                else if (this.REGEX.ALIAS.matchesAll(this.current))
                    this.yield('ALIAS');
                else
                    this.yieldAndTransition('MALFORMED', 'ARG');
            }
        },
        STATEMENT: function() {
            if (this.nextChar == ':')
                this.yieldAndTransition('LABEL', 'EOL');
            if (this.nextChar == ' ' || this.eol)
                this.yieldAndTransition('INSTRUCTION', 'ARG');
        },
        HASH: function() {
            if (this.current == 'HASH(')
                this.yield('HASH_OPEN');
            else if (this.REGEX.NUM_HASH.matchesAll(this.current))
                this.yield('HASH_STRING');
            else if (this.current == ')')
                this.yieldAndTransition('HASH_CLOSE', 'ARG');
            else if (this.eol || this.nextChar == '#' || this.nextChar == ')')
                this.yield('UNKNOWN');
        },
        COMMENT: function() {
            if (this.eol)
                this.yield('COMMENT');
        },
        SPACES: function() {
            if (this.char == ' ')
                this.yield('SPACE');
            else if (this.char == '\t')
                this.yield('TAB');
            else
                this.transition(this.lastState);
        },
        SOL: function() {
            switch (this.char) {
                case null:
                    this.yield('NL');
                    break;
                case '\t':
                    this.transition('SPACES');
                    break;
                case ' ':
                    this.transition('SPACES');
                    break;
                case '#':
                    this.transition('COMMENT');
                    break;
                default:
                    this.transition('STATEMENT');
                    break;
            }
        }
    }
    constructor(script) {
        this.line = 0;
        this.charPostProcessor();
        if (script != null) {
            this.tokens = this.eatScript(script)
        }
    }
  
    yield(tokenID) {
        this.token = new Token(tokenID, this.current, this.line);
        this.current = '';
    }
    yieldAndTransition(tokenID, newState, transitionData) {
        this.yield(tokenID);
        this.transition(newState, transitionData);
        this.transitioned = false;
    }
    transition(newState, transitionData) {
        this.transitioned = true;
        this.lastState = this.currentState;
        this.currentState = newState;
        this.state = this.STATES[this.currentState];
        this.stateData = transitionData;
    }

    eatChar(char, nextChar) {
        this.charPreProcessor(char, nextChar);

        this.transitioned = true;
        do {
            this.transitioned = false;
            this.state();
        } while (this.transitioned)
        this.charPostProcessor();
        return this.token;
    }
    eatLine(line) {
        const tokens = [];
        if (line.length == 0) // Manual bypass for no length lines
        {
            const token = this.eatChar(null, null);
            if (token != null)
                tokens.push(token);
        }
        for (let idx = 0; idx < line.length; idx++)
        {
            const token = this.eatChar(line[idx], line[idx + 1]);
            if (token != null)
                tokens.push(token);
        }
        return tokens;
    }
    eatScript(script) {
        var tokens = [];
        const scriptSplit = script.split('\n');
        for (const line of scriptSplit)
        {
            const manyToken = this.eatLine(line);
            tokens = tokens.concat(manyToken);
        }
        return tokens;
    }

    charPreProcessor(char, nextChar) {
        this.char = char;
        this.nextChar = nextChar;
        this.lastToken = this.token;
        this.token = null;
        if (this.nextChar == null)
            this.eol = true;
        if (char != null)
            this.current += char;
        if (this.current.length == 2)
            this.sol = false;
    }
    charPostProcessor() {
        this.lastChar = this.char;
        if (this.nextChar == null) {
            this.current = '';
            this.stateInfo = {};
            this.eol = false;
            this.sol = true;
            this.line++;
            this.lastChar = null;
            this.transition('SOL');
        }
    }
}

// @ts-ignore
CodeMirror.defineMode('ic10', function() {
    const tokenTypes = {
        TT_INSTRUCTION: 'instruction',
        TT_LABEL: 'label',
        TT_REGISTER: 'register',
        TT_STACKPOINTER: 'register',
        TT_DEVICE: 'device',
        TT_HASH_OPEN: 'hash',
        TT_HASH_CLOSE: 'hash',
        TT_HASH_STRING: 'hash-string',
        TT_NUM_CONST: 'num',
        TT_NUM_DEC: 'num',
        TT_INT_DEC: 'num',
        TT_INT_HEX: 'num',
        TT_INT_BIN: 'num',
        TT_BATCH_MODE: 'logic-type',
        TT_REAG_MODE: 'logic-type',
        TT_ALIAS: 'header',
        TT_ALIAS_C: 'variable-2',
        TT_COMMENT: 'comment',
        TT_MALFORMED: 'error',
        TT_SPACE: null,
        TT_UNKNOWN: null,
    };
    return {
        startState: () => {
            return {
                lexer: new IC10Lexer(),
                tokens: [],
                labels: [],
                aliases: [],
                defines: [],
                lastInstr: null,
                argIdx: 0
            };
        },
        token: (stream, state) => {
            var token = null;
            
            while (token == null)
            {
                var char = stream.next();
                if (char != null)
                    token = state.lexer.eatChar(char, stream.peek());

                if (token != null) {
                    if (token.ID == 'TT_INSTRUCTION')
                        state.lastInstr = token;
                    if (token.ID == 'TT_LABEL')
                        state.labels.push(token.DATA);
                    if (token.ID == 'TT_ALIAS'){
                        if (state.lastInstr != null && state.lastInstr.DATA == 'alias') {
                            state.aliases.push(token.DATA);
                            token.ID = 'TT_ALIAS_C'
                        }
                        else if (state.lastInstr != null && state.lastInstr.DATA == 'define') {
                            state.defines.push(token.DATA);
                            token.ID = 'TT_ALIAS_C'
                        }
                        else if (state.aliases.findIndex(i => i == token.DATA) >= 0 || state.defines.findIndex(i => i == token.DATA) >= 0)
                            token.ID = 'TT_ALIAS_C'
                        if (state.labels.findIndex(i => i == token.DATA) >= 0 || lookAhead(token.DATA))
                            token.ID = 'TT_LABEL';
                    }
                }

                if (char == null ) break;
            }

            if (this.lastInstr != null)

            if (token != null)
                state.tokens.push(token);
            return token == null ? null : tokenTypes[token.ID];

            function lookAhead(labelName) {
                var line = "";
                var idx = 0;
                do {
                    idx++;
                    line = stream.lookAhead(idx);
                    if (line == null) break;
                    if (line.trimStart().startsWith(labelName + ':')) return true;
                } while (line != null)
            }
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
        if (leader == '-keep') continue;
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

function IC10Stripper(tokenList) {
    const aliases = [];
    const defines = [];
    const labels = [];
    var result = '';
    var lastToken = null;
    var lastInstruction = null;
    var lineOffset = 0;

    const Modifiers = {
        space: function(token) {
            
        }
    }
    const EnabledModifiers = {};
    
    const lastInstructionIsModifier = () => lastInstruction != null && (lastInstruction.DATA == '-' || lastInstruction.DATA == '+');
    for (const token of tokenList) {
        var blockAdd = false;
        blockAdd ||= ProcessNewLine(token);

        blockAdd ||= ProcessModifiers(token);

        for (const modifier of Object.keys(EnabledModifiers)) {
            if (EnabledModifiers[modifier] && Modifiers[modifier])
                blockAdd ||= Modifiers[modifier](token);
        }
        
        if (!blockAdd)
            result += token.DATA;
        lastToken = token;
        if (token.ID == 'TT_INSTRUCTION')
            lastInstruction = token;
    }

    console.log({labels, defines, aliases, lineOffset, EnabledModifiers})
    return result;

    function ProcessNewLine(token) {
        if (lastToken == null) return;
        if (lastToken.LINE == token.LINE) return;
        // It's a line change, should we block it?
        var block = false;
        if (lastInstructionIsModifier()) block = true;
        if (!block) 
            result += '\n';
        else
            lineOffset--;
        lastInstruction = null;
    }
    function ProcessModifiers(token) {
        const isModifierAdd = lastInstruction != null && lastInstruction.DATA == '-';
        const isModifierSub = lastInstruction != null && lastInstruction.DATA == '+';
        if (isModifierSub && token.ID == 'TT_ALIAS' && EnabledModifiers[token.DATA] != null)
            EnabledModifiers[token.DATA] = undefined;
        if (isModifierAdd && token.ID == 'TT_ALIAS' )
            EnabledModifiers[token.DATA] = true;
        if (token.ID == 'TT_INSTRUCTION' && (token.DATA == '-' || token.DATA == '+'))
            return true;

        return isModifierAdd || isModifierSub;
    }
}