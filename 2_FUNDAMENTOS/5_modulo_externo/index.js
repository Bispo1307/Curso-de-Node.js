const minimist = require("minimist");
const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args["nome"];
const idade = args["idade"];
const profissao = args["profissao"];

console.log(nome, idade, profissao);

console.log("===================================================");

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Profissão: ${profissao}`);
