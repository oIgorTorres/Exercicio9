let real = 2;
let dolar = real * 5.20;
let euro = real * 5.70;


console.log(real.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log(dolar.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' }));
console.log(euro.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' }));