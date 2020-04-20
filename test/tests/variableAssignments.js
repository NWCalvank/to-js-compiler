import parse from "../../parser.js";

const tests = () => {
  // Test empty file
  let testAST = {
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

  let code = ``;

  let output = parse(code);

  let stringifiedAST = JSON.stringify(testAST);
  let stringifiedOutput = JSON.stringify(output);

  let result = stringifiedAST === stringifiedOutput;
  console.log(result, "Empty file parses properly");

  // Test variable assignment
  testAST = {
    type: "File",
    errors: [],
    program: {
      type: "Program",
      sourceType: "module",
      interpreter: null,
      body: [
        {
          type: "VariableDeclaration",
          declarations: [
            {
              type: "VariableDeclarator",
              id: {
                type: "Identifier",
                name: "name",
              },
              init: {
                type: "StringLiteral",
                value: "Nathan",
              },
            },
          ],
          kind: "const",
        },
      ],
      directives: [],
    },
    comments: [],
  };

  code = `name as "Nathan"`;

  output = parse(code);

  stringifiedAST = JSON.stringify(testAST);
  stringifiedOutput = JSON.stringify(output);

  result = stringifiedAST === stringifiedOutput;
  console.log(result, "Single variable assignment parses properly");

  // Test Whole File
  testAST = {
    type: "File",
    errors: [],
    program: {
      type: "Program",
      sourceType: "module",
      interpreter: null,
      body: [
        {
          type: "VariableDeclaration",
          declarations: [
            {
              type: "VariableDeclarator",
              id: {
                type: "Identifier",
                name: "me",
              },
              init: {
                type: "StringLiteral",
                value: "Nathan",
              },
            },
          ],
          kind: "const",
        },
        {
          type: "VariableDeclaration",
          declarations: [
            {
              type: "VariableDeclarator",
              id: {
                type: "Identifier",
                name: "billy",
              },
              init: {
                type: "StringLiteral",
                value: "Billy",
              },
            },
          ],
          kind: "const",
        },
      ],
      directives: [],
    },
    comments: [],
  };

  code = `
me as "Nathan"

billy as "Billy"
`;

  output = parse(code);

  stringifiedAST = JSON.stringify(testAST);
  stringifiedOutput = JSON.stringify(output);

  result = stringifiedAST === stringifiedOutput;
  console.log(result, "Parses multiple lines of variable assignments");

  testAST = {
    type: "File",
    errors: [],
    program: {
      type: "Program",
      sourceType: "module",
      interpreter: null,
      body: [
        {
          type: "VariableDeclaration",
          declarations: [
            {
              type: "VariableDeclarator",
              id: {
                type: "Identifier",
                name: "me",
              },
              init: {
                type: "StringLiteral",
                value: "Nathan",
              },
            },
          ],
          kind: "const",
        },
        {
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
            arguments: [
              {
                type: "Identifier",
                name: "me",
              },
            ],
          },
        },
      ],
      directives: [],
    },
    comments: [],
  };

  code = `
me as "Nathan"

print me
`;

  output = parse(code);

  stringifiedAST = JSON.stringify(testAST);
  stringifiedOutput = JSON.stringify(output);

  result = stringifiedAST === stringifiedOutput;
  console.log(result, "Print statements parse properly");

  testAST = {
    type: "File",
    errors: [],
    program: {
      type: "Program",
      sourceType: "module",
      interpreter: null,
      body: [
        {
          type: "VariableDeclaration",
          declarations: [
            {
              type: "VariableDeclarator",
              id: {
                type: "Identifier",
                name: "me",
              },
              init: {
                type: "StringLiteral",
                value: "Nathan",
              },
            },
          ],
          kind: "const",
        },
        {
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
            arguments: [
              {
                type: "Identifier",
                name: "me",
              },
              {
                type: "StringLiteral",
                value: "Billy",
              },
            ],
          },
        },
      ],
      directives: [],
    },
    comments: [],
  };

  code = `
me as "Nathan"

print me "Billy"
`;

  output = parse(code);

  stringifiedAST = JSON.stringify(testAST);
  stringifiedOutput = JSON.stringify(output);

  result = stringifiedAST === stringifiedOutput;
  console.log(result, "Print statements with primitive values parse properly");
};

export default tests;
