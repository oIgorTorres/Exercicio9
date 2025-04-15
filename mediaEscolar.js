let aluno1 = [2, 7];
let aluno2 = [5, 9];
let aluno3 = [6, 5];

let mediaAluno1 = (aluno1[0] + aluno1[1]) / 2;

let mediaAluno2 = (aluno2[0] + aluno2[1]) / 2;

let mediaAluno3 = (aluno3[0] + aluno3[1]) / 2;

let resultado = mediaAluno1 >= 6 ? "Aprovado" : "Reprovado"
let resultado2 = mediaAluno2 >= 6 ? "Aprovado" : "Reprovado"
let resultado3 = mediaAluno3 >= 6 ? "Aprovado" : "Reprovado"

console.log("\n")
console.log(`Média do aluno1:  ${mediaAluno1}\nCondição:  ${resultado} `);
console.log("\n")
console.log(`Média do aluno2:  ${mediaAluno2}\nCondição:  ${resultado2} `);
console.log("\n")
console.log(`Média do aluno3:  ${mediaAluno3}\nCondição:  ${resultado3} `);
console.log("\n")