var Cars=["BMW","Benz","Audi","Lexus"];
var Prices=[280,320,250,210];
var PriceWithTax=Prices.map(x=>x*1.05);
console.log(PriceWithTax);

// let total=0;
// Prices.forEach(item=>{
// 	total+=item;
// });
let totalPrices=Prices.reduce(function(total,item){
	return total+item;
});
console.log(total);