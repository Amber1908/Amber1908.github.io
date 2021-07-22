let url='https://raw.githubusercontent.com/Amber1908/Amber1908.github.io/master/JS/iphone/iphone.json';
fetch(url)
.then(response=>response.json())
.then(result=>{
	let type=document.querySelector(".type");
	let colorArea=document.querySelector(".colorArea");
	let storage=document.querySelector('.storage');
	let h1=document.querySelector('h1');

	//抓json檔的資料
	let iphone12pro=result[0].iphone12Pro.name;
	console.log(iphone12pro);

	let iphone12proPrice=result[0].iphone12Pro.price;
	let iphone12maxPrice=result[1].iphone12ProMax.price;
	console.log(iphone12maxPrice);

	let  itemimgUrl=result[1].iphone12ProMax.imgUrl;
	let  itemimgUrl2=result[0].iphone12Pro.imgUrl;
	let itemimgcolorB=result[1].iphone12ProMax.colors[0].imgcolorUrl;
	let itemimgcolorBp=result[0].iphone12Pro.colors[0].imgcolorUrl;
	let itemimgcolorS=result[1].iphone12ProMax.colors[1].imgcolorUrl;
	let itemimgcolorSp=result[0].iphone12Pro.colors[1].imgcolorUrl;
	let itemimgcolorG=result[1].iphone12ProMax.colors[2].imgcolorUrl;
	let itemimgcolorGp=result[0].iphone12Pro.colors[2].imgcolorUrl;
	let itemimgcolorOB=result[1].iphone12ProMax.colors[3].imgcolorUrl;
	let itemimgcolorOBp=result[0].iphone12Pro.colors[3].imgcolorUrl;

	let finalPrice1

	let btniphone12max=document.querySelector(".btnTypeMax");
	var flag=0;
	btniphone12max.addEventListener('click',function () {
		console.log(iphone12maxPrice);
		//換價格
		let totalprice=document.querySelector('#totalPrice');
		totalprice.innerText=iphone12maxPrice;
		let cart=document.querySelector(".Cart");
		cart.innerText=iphone12maxPrice;
		//換圖片
		let itemimg=document.querySelector('.Img');
		itemimg.src= itemimgUrl;
		flag=1;

		let StoragePrice0=document.querySelectorAll('.StoragePrice')[0];
		StoragePrice0.innerText="NT$37,900";
		let StoragePrice1=document.querySelectorAll('.StoragePrice')[1];
		StoragePrice1.innerText="NT$41,400";
		let StoragePrice2=document.querySelectorAll('.StoragePrice')[2];
		StoragePrice2.innerText="NT$48,400";
	});
	
	let btniphone12pro=document.querySelector('.btnTypePro');
	btniphone12pro.addEventListener('click',function () {
		let totalprice=document.querySelector('#totalPrice');
		totalprice.innerText=iphone12proPrice;
		let cart=document.querySelector(".Cart");
		cart.innerText=iphone12proPrice;
		let itemimg=document.querySelector('.Img');
		itemimg.src= itemimgUrl2;
		flag=0;

		let StoragePrice3=document.querySelectorAll('.StoragePrice')[0];
		StoragePrice3.innerText="NT$33,900";
		let StoragePrice4=document.querySelectorAll('.StoragePrice')[1];
		StoragePrice4.innerText="NT$37,400";
		let StoragePrice5=document.querySelectorAll('.StoragePrice')[2];
		StoragePrice5.innerText="NT$44,400";
	})
	let btnColorB=document.querySelectorAll('.btnColor')[0];
	btnColorB.addEventListener('click',function  () {
		if(flag==1){
			let itemimg=document.querySelector('.Img');
			itemimg.src= itemimgcolorB;
		}
		else{
			let itemimg=document.querySelector('.Img');
			itemimg.src= itemimgcolorBp;
		}
	})
	let btnColorS=document.querySelectorAll('.btnColor')[1];
	btnColorS.addEventListener('click',function () {
		if(flag==1){
			let itemimg=document.querySelector('.Img');
			itemimg.src= itemimgcolorS;
		}
		else{
			let itemimg=document.querySelector('.Img');
			itemimg.src= itemimgcolorSp;
		}
	})
	let btnColorG=document.querySelectorAll('.btnColor')[2];
	btnColorG.addEventListener('click',function () {
		if(flag==1){
			let itemimg=document.querySelector('.Img');
			itemimg.src= itemimgcolorG;
		}
		else{
			let itemimg=document.querySelector('.Img');
			itemimg.src= itemimgcolorGp;
		}
	})
	let btnColorOB=document.querySelectorAll('.btnColor')[3];
	btnColorOB.addEventListener('click',function () {
		if(flag==1){
			let itemimg=document.querySelector('.Img');
			itemimg.src= itemimgcolorOB;
		}
		else{
			let itemimg=document.querySelector('.Img');
			itemimg.src= itemimgcolorOBp;
		}
	})
	let btnStorage=document.querySelectorAll('.btnStorage')[0];
	btnStorage.addEventListener('click',function () {
		let totalprice=document.querySelector('#totalPrice');
		let cart=document.querySelector(".Cart");
		if(flag==1){
			totalprice.innerText="NT$37,900";
		 	cart.innerText="NT$37,900";
			
		}else{
			totalprice.innerText="NT$33,900";
		 	cart.innerText="NT$33,900";
		}
		
	})
	let btnStorage2=document.querySelectorAll('.btnStorage')[1];
	btnStorage2.addEventListener('click',function () {
		let totalprice=document.querySelector('#totalPrice');
		let cart=document.querySelector(".Cart");
		if(flag==1){
			totalprice.innerText="NT$41,400";
		 	cart.innerText="NT$41,400";
			
		}else{
			totalprice.innerText="NT$37,400";
		 	cart.innerText="NT$37,400";
		}
	})
	let btnStorage3=document.querySelectorAll('.btnStorage')[2];
	btnStorage3.addEventListener('click',function () {
		let totalprice=document.querySelector('#totalPrice');
		let cart=document.querySelector(".Cart");
		if(flag==1){
			totalprice.innerText="NT$48,400";
		 	cart.innerText="NT$48,400";
			
		}else{
			totalprice.innerText="NT$44,400";
		 	cart.innerText="NT$44,400";
		}
	})
});
	
