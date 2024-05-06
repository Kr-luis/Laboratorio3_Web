//Numeros
const LaptopName = "AlienWare i9 9na gen"
const HeadphonesName = "Beats studio pro"
const MouseName = "Logictec 001"
let desc= 0.15
const verificado = true
let LaptopPrice = 700
let HeadphonesPrice = 200
let MousePrice = 80
let TotalPrice 
let DescPrice
let FinalPrice

if (verificado == true){
    TotalPrice = LaptopPrice + HeadphonesPrice + MousePrice
    DescPrice = TotalPrice*desc
    FinalPrice = TotalPrice-DescPrice
}

console.log(`Productos seleccionados: "${LaptopName} a $${LaptopPrice}", "${HeadphonesName} a $${HeadphonesPrice}", "${MouseName} a $${MousePrice}"`);
console.log(`El descuento existenete es de 15%`);
console.log(`El precio global es de ${TotalPrice} y con el descuento es de ${FinalPrice}`);

