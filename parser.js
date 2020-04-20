const ast = {
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
};

const VariableDeclaration = () => ({
  type: "VariableDeclaration",
  declarations: [],
  kind: "const",
});

const VariableDeclarator = token => ({
  type: "VariableDeclarator",
  id: {
    type: "Identifier",
    name: token,
  },
  init: {
    type: "StringLiteral",
    value: "Nathan",
  },
});

const parseProgram = sourceCode => {
  const lines = sourceCode.split("\n");

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (line.length === 0) {
      continue;
    }
    const tokens = line.split(" ");
    const declaration = VariableDeclaration();
    const declarator = VariableDeclarator(tokens[0]);

    // Blindly assume it's a string
    declarator.init.value = tokens[tokens.length - 1].replace(/"/g, "");
    declaration.declarations = [declarator];

    ast.program.body = [declaration];
  }

  return ast;
};

const parse = sourceCode => {
  // Update Program
  parseProgram(sourceCode);

  return ast;
};

export default parse;
