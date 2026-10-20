const chalk = require("chalk");
const nota = 6;

if (nota >= 7) {
  console.log(chalk.green("Parabens! Você foi aprovado"));
} else if (nota >= 5) {
  console.log(chalk.yellow("Você está de recuperação"));
} else {
  console.log(chalk.red("Você foi reprovado"));
}
