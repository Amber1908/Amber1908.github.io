// var x=1;
// let y=2;
// const z=3;
// {
// 	var x='q';
// 	let y='w';
// 	const z='e';
// 	console.log(x);
// 	console.log(y);
// 	console.log(z);

// }
// 	console.log(x);
// 	console.log(y);
// 	console.log(z);
const productArray=['iphone','ipad','Mac'];
var mymap=new Map();
mymap.set('product',productArray);
console.log(Array.isArray(mymap.get('product')));