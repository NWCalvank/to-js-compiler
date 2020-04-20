import fs from "fs";
import generator from '@babel/generator';

import parse from "./parser.js";

const code = fs.readFileSync("./entry.poc", "utf8");

// get the AST
const ast = parse(code);

// Convert AST to JS via Babel
const output = generator.default(ast, code);
fs.writeFileSync("./dist/output.js", output.code);
