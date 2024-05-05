const fs = require("fs");
const path = require("path");

const filePath = path.resolve("assets", "welcome.txt");
fs.writeFileSync(filePath, "Hello Node", { encoding: "utf-8" });
const data = fs.readFileSync(filePath,"utf-8");
console.log(data);