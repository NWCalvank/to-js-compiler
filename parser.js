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

const ConsoleStatement = () => ({
  type: "ExpressionStatement",
  expression: {
    type: "CallExpression",
    callee: {
      type: "MemberExpression",
      object: {
        type: "Identifier",
        name: "console",
      },
      property: {
        type: "Identifier",
        name: "log",
      },
      computed: false,
    },
    arguments: [],
  },
});

const Argument = name => ({
  type: "Identifier",
  name,
});

const StringLiteral = value => ({
  type: "StringLiteral",
  value,
});

const cleanString = str => str.replace(/"/g, "");

const ASSIGNMENT = "as";
const STRING = "StringLiteral";

const isDeclaration = line => line.includes(ASSIGNMENT);
const isLog = line => line.match(/^print\s/g) !== null;
const isString = value => value.match(/"/g) !== null;

const parseProgram = (sourceCode, ast) => {
  const lines = sourceCode.split("\n");

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const tokens = line.split(" ");

    if (isDeclaration(tokens)) {
      let value = tokens[tokens.length - 1];
      let type;

      if (isString(value)) {
        type = STRING;
        value = cleanString(value);
      }
      const declaration = VariableDeclaration();
      const declarator = VariableDeclarator(tokens[0], type);

      declarator.init.value = value;
      declaration.declarations = [declarator];

      ast.program.body.push(declaration);
    }

    if (isLog(line)) {
      const values = line.split(" ").slice(1);
      const statement = ConsoleStatement();

      statement.expression.arguments = values.map(value => {
        if (isString(value)) {
          return StringLiteral(cleanString(value));
        }
        return Argument(value);
      });

      ast.program.body.push(statement);
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
