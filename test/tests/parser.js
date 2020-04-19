import parse from "../../parser.js";

// Test empty file
let testAST = {
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

let code = `name as "Nathan"`;

let output = parse(code);

let stringifiedAST = JSON.stringify(testAST);
let stringifiedOutput = JSON.stringify(output);

console.log(stringifiedAST === stringifiedOutput);

// Test variable assignment
testAST = {
  type: "File",
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
  errors: [],
  program: {
    type: "Program",
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
    sourceType: "module",
    interpreter: null,
    body: [
      {
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
        declarations: [
          {
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
                identifierName: "name",
              },
              name: "name",
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

console.log(JSON.stringify(output, null, 4, 4));

console.log(stringifiedAST === stringifiedOutput);

// Test Whole File
testAST = {
  type: "File",
  start: 0,
  end: 124,
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 5,
      column: 59,
    },
  },
  errors: [],
  program: {
    type: "Program",
    start: 0,
    end: 124,
    loc: {
      start: {
        line: 1,
        column: 0,
      },
      end: {
        line: 5,
        column: 59,
      },
    },
    sourceType: "module",
    interpreter: null,
    body: [
      {
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
        declarations: [
          {
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
                identifierName: "name",
              },
              name: "name",
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
          },
        ],
        kind: "const",
      },
      {
        type: "VariableDeclaration",
        start: 23,
        end: 63,
        loc: {
          start: {
            line: 3,
            column: 0,
          },
          end: {
            line: 3,
            column: 40,
          },
        },
        declarations: [
          {
            type: "VariableDeclarator",
            start: 29,
            end: 63,
            loc: {
              start: {
                line: 3,
                column: 6,
              },
              end: {
                line: 3,
                column: 40,
              },
            },
            id: {
              type: "Identifier",
              start: 29,
              end: 35,
              loc: {
                start: {
                  line: 3,
                  column: 6,
                },
                end: {
                  line: 3,
                  column: 12,
                },
                identifierName: "people",
              },
              name: "people",
            },
            init: {
              type: "ArrayExpression",
              start: 38,
              end: 63,
              loc: {
                start: {
                  line: 3,
                  column: 15,
                },
                end: {
                  line: 3,
                  column: 40,
                },
              },
              elements: [
                {
                  type: "StringLiteral",
                  start: 39,
                  end: 45,
                  loc: {
                    start: {
                      line: 3,
                      column: 16,
                    },
                    end: {
                      line: 3,
                      column: 22,
                    },
                  },
                  extra: {
                    rawValue: "John",
                    raw: '"John"',
                  },
                  value: "John",
                },
                {
                  type: "StringLiteral",
                  start: 47,
                  end: 53,
                  loc: {
                    start: {
                      line: 3,
                      column: 24,
                    },
                    end: {
                      line: 3,
                      column: 30,
                    },
                  },
                  extra: {
                    rawValue: "Paul",
                    raw: '"Paul"',
                  },
                  value: "Paul",
                },
                {
                  type: "StringLiteral",
                  start: 55,
                  end: 62,
                  loc: {
                    start: {
                      line: 3,
                      column: 32,
                    },
                    end: {
                      line: 3,
                      column: 39,
                    },
                  },
                  extra: {
                    rawValue: "Ringo",
                    raw: '"Ringo"',
                  },
                  value: "Ringo",
                },
              ],
            },
          },
        ],
        kind: "const",
      },
      {
        type: "VariableDeclaration",
        start: 65,
        end: 124,
        loc: {
          start: {
            line: 5,
            column: 0,
          },
          end: {
            line: 5,
            column: 59,
          },
        },
        declarations: [
          {
            type: "VariableDeclarator",
            start: 71,
            end: 124,
            loc: {
              start: {
                line: 5,
                column: 6,
              },
              end: {
                line: 5,
                column: 59,
              },
            },
            id: {
              type: "Identifier",
              start: 71,
              end: 78,
              loc: {
                start: {
                  line: 5,
                  column: 6,
                },
                end: {
                  line: 5,
                  column: 13,
                },
                identifierName: "address",
              },
              name: "address",
            },
            init: {
              type: "ArrayExpression",
              start: 81,
              end: 124,
              loc: {
                start: {
                  line: 5,
                  column: 16,
                },
                end: {
                  line: 5,
                  column: 59,
                },
              },
              elements: [
                {
                  type: "StringLiteral",
                  start: 82,
                  end: 101,
                  loc: {
                    start: {
                      line: 5,
                      column: 17,
                    },
                    end: {
                      line: 5,
                      column: 36,
                    },
                  },
                  extra: {
                    rawValue: "1610 Store Street",
                    raw: '"1610 Store Street"',
                  },
                  value: "1610 Store Street",
                },
                {
                  type: "StringLiteral",
                  start: 103,
                  end: 112,
                  loc: {
                    start: {
                      line: 5,
                      column: 38,
                    },
                    end: {
                      line: 5,
                      column: 47,
                    },
                  },
                  extra: {
                    rawValue: "Apt 219",
                    raw: '"Apt 219"',
                  },
                  value: "Apt 219",
                },
                {
                  type: "StringLiteral",
                  start: 114,
                  end: 123,
                  loc: {
                    start: {
                      line: 5,
                      column: 49,
                    },
                    end: {
                      line: 5,
                      column: 58,
                    },
                  },
                  extra: {
                    rawValue: "V8W 0E3",
                    raw: '"V8W 0E3"',
                  },
                  value: "V8W 0E3",
                },
              ],
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
name as "Nathan"

people as ["John", "Paul", "Ringo"]

address as ("1610 Store Street", "Apt 219", "V8W 0E3")
`;

output = parse(code);

stringifiedAST = JSON.stringify(testAST);
stringifiedOutput = JSON.stringify(output);

console.log(stringifiedAST === stringifiedOutput);
