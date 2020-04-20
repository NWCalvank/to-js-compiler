import parse from "../../parser.js";

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

console.log(stringifiedAST === stringifiedOutput);

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

console.log(stringifiedAST === stringifiedOutput);

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

console.log(stringifiedAST === stringifiedOutput);
