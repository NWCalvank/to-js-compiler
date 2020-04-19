import fs from "fs";
import parse from "./parser.js";

const code = fs.readFileSync("./entry.poc", "utf8");

// get the AST
const ast = parse(code);

// Convert AST to JS via Babel
const babel = _ast => _ast;

fs.writeFileSync("./dist/output.js", babel(ast));
