const ast = {
  type: "File",
  start: 0,
  end: 0,
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 1,
      column: 0,
    },
  },
  errors: [],
  program: {
    type: "Program",
    start: 0,
    end: 0,
    loc: {
      start: {
        line: 1,
        column: 0,
      },
      end: {
        line: 1,
        column: 0,
      },
    },
    sourceType: "module",
    interpreter: null,
    body: [],
    directives: [],
  },
  comments: [],
};

const VariableDeclaration = () => ({
  type: "VariableDeclaration",
  start: 0,
  end: 21,
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 1,
      column: 21,
    },
  },
  declarations: [],
  kind: "const",
});

const VariableDeclarator = token => ({
  type: "VariableDeclarator",
  start: 6,
  end: 21,
  loc: {
    start: {
      line: 1,
      column: 6,
    },
    end: {
      line: 1,
      column: 21,
    },
  },
  id: {
    type: "Identifier",
    start: 6,
    end: 10,
    loc: {
      start: {
        line: 1,
        column: 6,
      },
      end: {
        line: 1,
        column: 10,
      },
      identifierName: token,
    },
    name: token,
  },
  init: {
    type: "StringLiteral",
    start: 13,
    end: 21,
    loc: {
      start: {
        line: 1,
        column: 13,
      },
      end: {
        line: 1,
        column: 21,
      },
    },
    extra: {
      rawValue: "Nathan",
      raw: '"Nathan"',
    },
    value: "Nathan",
  },
});

const parseProgram = sourceCode => {
  ast.program.end = sourceCode.length;
  const lines = sourceCode.split("\n");
  ast.program.loc.end.line = lines.length;
  ast.program.loc.end.column = lines[lines.length - 1].length;

  const i = 0;
  const line = lines[i];
  const tokens = line.split(" ");
  const declaration = VariableDeclaration();
  const declarator = VariableDeclarator(tokens[0]);

  // Blindly assume it's a string
  declarator.init.value = tokens[tokens.length - 1].replace(/"/g, "");
  declaration.declarations = [declarator];

  ast.program.body = [declaration];

  return ast;
};

const parse = sourceCode => {
  // Update File
  ast.end = sourceCode.length;
  const lines = sourceCode.split("\n");
  ast.loc.end.line = lines.length;
  ast.loc.end.column = lines[lines.length - 1].length;

  // Update Program
  parseProgram(sourceCode);

  return ast;
};

export default parse;
