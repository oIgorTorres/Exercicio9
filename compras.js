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
console.log("Preço com desconto: " + precoComDesconto.toFixed(2) + precoComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log("\n")