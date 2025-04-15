let produto = `casaco`;
let preco = 89.90;
let desconto = "10%";
let precoComDesconto = preco * 0.90;

console.log("\n")
console.log(`Produto: ${produto}`);
console.log("\n")
console.log("Preço: " +preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log("\n")
console.log(`Desconto aplicado: ${desconto}`);
console.log("\n")
let precoComDesconto2 = precoComDesconto.toFixed(2);
console.log("Preço com desconto: " + precoComDesconto2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log("\n")