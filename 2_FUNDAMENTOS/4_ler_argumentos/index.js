console.log(process.argv);

const args = process.argv.slice(2);
console.log(args);

const nome = args[0].split("=")[1];
console.log(nome);

// ========== TAMBEM FUNCIONA ==========

console.log(`Nome: ${process.argv[2].split("=")[1]}`);
console.log(`Idade: ${process.argv[3].split("=")[1]}`);
