const UpdateReady = {
    CONSTANTS: [ 'nan','pinf','ninf','pi','deg2rad','rad2deg','epsilon' ],
    LOGICTYPES: [ 'ChargeRatio','Class','Damage','Efficiency','Growth','Health','Mature','MaxQuantity','OccupantHash','Occupied','Quantity','Seeding','SortingClass','Activate','AirRelease','Bpm','Charge','ClearMemory','CollectableGoods','Color','Combustion','CombustionInput','CombustionLimiter','CombustionOutput','CombustionOutput2','CompletionRatio','ElevatorLevel','ElevatorSpeed','Error','ExportCount','Filtration','Flush','ForceWrite','Fuel','Harvest','Horizontal','Idle','ImportCount','InterrogationProgress','LineNumber','Lock','Maximum','MineablesInQueue','MineablesInVicinity','Minimum','MinimumWattsToContact','Mode','NextWeatherEventTime','On','Open','Output','Plant','PositionX','PositionY','PositionZ','Power','PowerActual','PowerGeneration','PowerPotential','PowerRequired','PrefabHash','Pressure','PressureAir','PressureExternal','PressureInput','PressureInternal','PressureOutput','PressureOutput2','PressureSetting','PressureWaste','Ratio','RatioCarbonDioxide','RatioCarbonDioxideInput','RatioCarbonDioxideOutput','RatioCarbonDioxideOutput2','RatioLiquidCarbonDioxide','RatioLiquidNitrogen','RatioLiquidNitrousOxide','RatioLiquidOxygen','RatioLiquidPollutant','RatioLiquidVolatiles','RatioNitrogen','RatioNitrogenInput','RatioNitrogenOutput','RatioNitrogenOutput2','RatioNitrousOxide','RatioNitrousOxideInput','RatioNitrousOxideOutput','RatioNitrousOxideOutput2','RatioOxygen','RatioOxygenInput','RatioOxygenOutput','RatioOxygenOutput2','RatioPollutant','RatioPollutantInput','RatioPollutantOutput','RatioPollutantOutput2','RatioSteam','RatioVolatiles','RatioVolatilesInput','RatioVolatilesOutput','RatioVolatilesOutput2','RatioWater','RatioWaterInput','RatioWaterOutput','RatioWaterOutput2','Reagents','RecipeHash','RequestHash','RequiredPower','ReturnFuelCost','Rpm','Setting','SettingOutput','SignalID','SignalStrength','SizeX','SizeZ','SolarAngle','SolarIrradiance','SoundAlert','Stress','TargetPadIndex','TargetX','TargetY','TargetZ','Temperature','TemperatureExternal','TemperatureInput','TemperatureOutput','TemperatureOutput2','TemperatureSetting','Throttle','Time','TotalMoles','TotalMolesInput','TotalMolesOutput','TotalMolesOutput2','VelocityMagnitude','VelocityRelativeX','VelocityRelativeY','VelocityRelativeZ','Vertical','Volume','VolumeOfLiquid','WattsReachingContact','Contents','Recipe','Required','Channel0','Channel1','Channel2','Channel3','Channel4','Channel5','Channel6','Channel7','Average','Sum','ReferenceId' ],
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
        LOGIC_TYPE: new RegExp(`^(${UpdateReady.LOGICTYPES.join('|')})$`),
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
            } else if (this.nextChar == '\t' || this.nextChar == ' ' || this.nextChar == '#' || this.eol)
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
                else if (this.REGEX.LOGIC_TYPE.matchesAll(this.current))
                    this.yield('LOGIC_TYPE');
                else if (this.REGEX.ALIAS.matchesAll(this.current))
                    this.yield('ALIAS');
                else
                    this.yieldAndTransition('MALFORMED', 'ARG');
            }
        },
        STATEMENT: function() {
            if (this.nextChar == ':')
                this.yieldAndTransition('LABEL', 'EOL');
            if (this.nextChar == '\t' || this.nextChar == ' ' || this.eol)
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

class IC10Stripper {
    modules = []
    constructor() {
        this
            .use(ImportStatements)
            .use(HandleProcessStatements)

        async function ImportStatements(line, state) {
            const ImportPattern = /^[ \t]*import[ \t]+([A-Za-z0-9.-_]+)/;
            var match = line.match(ImportPattern);
            if (match) {
                const value = await localForage.getItem(match[1]);
                if (value != null) {
                    return value;
                }
            }
            return line;
        }
        function HandleProcessStatements(line, state) {
            const ProcessPattern = /^[ \t]*process/;
            var match = line.match(ProcessPattern);
            if (!state.inProcess && match) {
                state.inProcess = true;
                state.processData = '';
                state.processPriority = match[1];
                return null;
            }
            if (line.match(/^[ \t]*end[ \t]*$/) && state.inProcess){
                state.inProcess = false;
                
                var tempFunc;
                const newMethod = `tempFunc = function(line, state) { ${state.processData} }`;
                try {
                    eval(newMethod);
                    state.use(tempFunc);
                } catch (exce) {
                    // Ignore exceptions lol
                }
                return null;
            }
            if (state.inProcess && line != null) {
                state.processData += line + '\n';
                return null;
            }
            return line;
        }
    }
    use(module) {
        this.modules.push(module);
        return this;
    }
    async process(script) {
        this.lines = script.split('\n');
        const backup = this.modules;

        while (this.modules.length > 0)
        {
            this.modules = this.modules.reverse();
            const currentModule = this.modules.pop();
            this.modules = this.modules.reverse();

            await LineProcessor(this, async (line, state) => await currentModule(line, state));
            this.lines = this.lines.join('\n').split('\n');
        }

        this.modules = backup;
        return this.lines.join('\n');

        async function LineProcessor(state, callback) {
            var newLines = [];
            state.linesSkipped = 0;
            state.line = 0;
            for (let line of state.lines) {
                line = await callback(line, state);

                if (line != null) 
                    if (typeof(line) == typeof([]))
                        newLines.concat(line);
                    else
                        newLines.push(line);
                else 
                    state.linesSkipped++;
                state.line++;
            }
            state.lines = newLines;
        }
    }
}

// @ts-ignore
CodeMirror.defineMode('ic10', function(config) {
    var jsMode = CodeMirror.getMode(config, "javascript");
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
        TT_LOGIC_TYPE: 'logic-type',
        TT_ALIAS: 'header',
        TT_ALIAS_A: 'regdevice',
        TT_ALIAS_D: 'num',
        TT_COMMENT: 'comment',
        TT_MALFORMED: null,
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
                argIdx: 0,
                nestedState: CodeMirror.startState(jsMode)
            };
        },
        token: (stream, state) => {
            var token = null;
            if (state.inNested) {
                if (stream.sol() && stream.match(/[ \t]*end/)) {
                    state.inNested = false;
                    return tokenTypes['TT_INSTRUCTION'];
                }
                return jsMode.token(stream, state.nestedState);
            }
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
                            token.ID = 'TT_ALIAS_A'
                        }
                        else if (state.lastInstr != null && state.lastInstr.DATA == 'define') {
                            state.defines.push(token.DATA);
                            token.ID = 'TT_ALIAS_D'
                        }
                        else if (state.aliases.findIndex(i => i == token.DATA) >= 0 || aliasLookAhead(token.DATA))
                            token.ID = 'TT_ALIAS_A'
                        else if (state.defines.findIndex(i => i == token.DATA) >= 0 || defineLookAhead(token.DATA))
                            token.ID = 'TT_ALIAS_D'
                        if (state.labels.findIndex(i => i == token.DATA) >= 0 || labelLookAhead(token.DATA))
                            token.ID = 'TT_LABEL';
                    }
                }

                if (state.lastInstr != null && state.lastInstr.DATA == 'process') {
                    state.scriptMode = token.DATA;
                    state.inNested = true;
                    state.lastInstr = null;
                    state.lexer.eatChar(null, null); // Ye ol' EoL
                }
                if (char == null ) break;
            }

            if (token != null)
                state.tokens.push(token);
            return token == null ? null : tokenTypes[token.ID];

            function labelLookAhead(labelName) {
                var line = "";
                var idx = 0;
                do {
                    idx++;
                    line = stream.lookAhead(idx);
                    if (line == null) break;
                    if (line.trimStart().startsWith(labelName + ':')) return true;
                } while (line != null)
            }
            function aliasLookAhead(aliasName) {
                var line = "";
                var idx = 0;
                do {
                    idx++;
                    line = stream.lookAhead(idx);
                    if (line == null) break;
                    const match = line.match(/[ \t*]*alias[ \t]+([^ \t]+)/);
                    if (match && match[1] == aliasName) return true;
                } while (line != null)
            }
            function defineLookAhead(defineName) {
                var line = "";
                var idx = 0;
                do {
                    idx++;
                    line = stream.lookAhead(idx);
                    if (line == null) break;
                    const match = line.match(/[ \t*]*define[ \t]+([^ \t]+)/);
                    if (match && match[1] == defineName) return true;
                } while (line != null)
            }
        }
    };
});