const AST = () => ({
  type: "File",
  errors: [],
  program: {
    type: "Program",
    sourceType: "module",
    interpreter: null,
    body: [],
    directives: [],
  },
  comments: [],
});

const VariableDeclaration = () => ({
  type: "VariableDeclaration",
  declarations: [],
  kind: "const",
});

const VariableDeclarator = (token, type) => ({
  type: "VariableDeclarator",
  id: {
    type: "Identifier",
    name: token,
  },
  init: {
    type,
    value: "",
  },
});

const ASSIGNMENT = "as";
const STRING = "StringLiteral";

const isDeclaration = line => line.includes(ASSIGNMENT);
const isString = value => value.match(/"/g) !== null;

const parseProgram = (sourceCode, ast) => {
  const lines = sourceCode.split("\n");

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const tokens = line.split(" ");

    if (line.length === 0) {
      continue;
    }

    if (isDeclaration(tokens)) {
      let value = tokens[tokens.length - 1];
      let type;

      if (isString(value)) {
        type = STRING;
        value = value.replace(/"/g, "")
      }
      const declaration = VariableDeclaration();
      const declarator = VariableDeclarator(tokens[0], type);

      declarator.init.value = value;
      declaration.declarations = [declarator];

      ast.program.body.push(declaration);
    }
  }

  return ast;
};

const parse = sourceCode => {
  const ast = AST();
  // Update Program
  parseProgram(sourceCode, ast);

  return ast;
};

export default parse;
