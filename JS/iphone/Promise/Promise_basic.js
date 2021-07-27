const promise1=new Promise(function (resolve,reject) {
	setTimeout(()=>{
		// resolve("程式執行成功,交易完成！")
		reject("程式執行失敗交易中斷");
	},3000);
});


promise1
	.then(result=>{
		console.log("成功的結果值："+result);
	})
	.catch(ex =>{
		console.log(" 失敗的原因："+ex);
	})
	.finally()


	//+++++++++++++++++++++++++++++++++++++++++++++++++


	// const promise3=new Promise(function (resolve,reject) {
	// 	setTimeout(()=>{
	// 		resolve('成功')
	// 		reject('電腦出錯')
	// 		},3000);
	// });


// promise3
// 	.then(function (res) {
		
// 	}
// 		console.log("成功的結果值："+result);
// 	})
// 	.catch(ex =>{
// 		console.log(" 失敗的原因："+ex);
// 	})
// 	.finally()

	//+++++++++++++++++++++++
	//平行
	fetch(url1).then(r=>r.json()).then();//費時3sec
	fetch(url2).then(r=>r.json()).then();//費時2.5sec
	fetch(url3).then(r=>r.json()).then();//費時4sec
	//共費時4sec
	//++++++++++++++++++++++++
	//依序串接
	fetch(url1)
	.then(r=>r.json())
	.then()
	.catch()
	//_____________________________
	let p1=Promise.resolve(35);
	let p2=Promise.resolve(p1);
	p2.then(result=>{
		console.log(p1);
		console.log(result);
		console.log(p1);
	})
