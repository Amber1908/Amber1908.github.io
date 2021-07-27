const promise1=new Promise(function (resolve,reject) {
	setTimeout(()=>{
		resolve("程式執行成功,交易完成！")
		reject("程式執行失敗交易中斷");
	},3000);
});

console.log(promise1);

promise1
	.then(result=>{
		console.log("成功的結果值："+result);
	})
	.catch(ex=>{
		console.log(" 失敗的原因："+ex);
	})
	.finally(()=>{
		console.log("promise finally 完成");
	})
console.log(promise1);