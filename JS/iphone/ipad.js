let url="https://raw.githubusercontent.com/Amber1908/Amber1908.github.io/master/JS/iphone/ipadNew.json";

let btnColor =document.querySelectorAll('.btnColor');
let btnimgColor0=document.getElementsByTagName('coloroimg')[0];
let btnStorage =document.querySelectorAll('.btnStorage');

let ipadArray = [];

window.onload=function () {
	requestJSON();
	btnimgColor0.src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/finish-spacegray-201903?wid=102&amp;hei=102&amp;fmt=png-alpha&amp;.v=1552422652805";
	
}
let xhr=new XMLHttpRequest();
function requestJSON() {
	xhr.responseType="json"
	xhr.onload=function () {
		let ipad=this.response;
		var flag=0;
		let _color,_storage,_network;
		let btnColorG=document.querySelectorAll('.btnColor')[0];
		let btnColorS=document.querySelectorAll('.btnColor')[1];
		let btnColorR=document.querySelectorAll('.btnColor')[2];
		let btnColorGn=document.querySelectorAll('.btnColor')[3];
		let btnColorB=document.querySelectorAll('.btnColor')[4];

		let btnStorage64=document.querySelectorAll('.btnStorage')[0];
		let btnStorage256=document.querySelectorAll('.btnStorage')[1];

		let onlyWifi=document.querySelectorAll('.btnwifi')[0];
		let wifi=document.querySelectorAll('.btnwifi')[1];


		btnColorG.addEventListener("click",function  () {
			let itemimg=document.querySelector('.Img');
			itemimg.src=ipad[0].imgUrl;
			flag=1;
			_color='太空灰色';
			open();
		
		});

		btnColorS.addEventListener("click",function  () {
			let itemimg=document.querySelector('.Img');
			itemimg.src=ipad[1].imgUrl;
			flag=1;
			_color='銀色';
			open();
		
		});

		btnColorR.addEventListener("click",function  () {
			let itemimg=document.querySelector('.Img');
			itemimg.src=ipad[2].imgUrl;
			flag=1;
			_color='玫瑰金色';
			open();
		
		});	

	

		btnColorGn.addEventListener("click",function  () {
			let itemimg=document.querySelector('.Img');
			itemimg.src=ipad[3].imgUrl;
			_color='綠色';

			flag=1;
			open();
		
		});

		btnColorB.addEventListener("click",function  () {
			let itemimg=document.querySelector('.Img');
			itemimg.src=ipad[4].imgUrl;
			_color='天藍色';
			flag=1;
			open();
		
		});

		btnStorage64.addEventListener("click",function () {
			let Cart=document.querySelector('.Cart');
			Cart.innerText="NT$18,900";
			let totalprice=document.querySelector('#totalPrice');
			totalprice.innerText='NT$18,900';
			let StoragePrice=document.querySelectorAll('.StoragePrice')[2];
			StoragePrice.innerText="NT$18,900";
			let StoragePrice2=document.querySelectorAll('.StoragePrice')[3];
			StoragePrice2.innerText="NT$23,200";
			_storage='64GB';
			flag=2;
			open();
		});

		btnStorage256.addEventListener("click",function () {
			let Cart=document.querySelector('.Cart');
			Cart.innerText="NT$23,200";
			let totalprice=document.querySelector('#totalPrice');
			totalprice.innerText='NT$23,200';
			let StoragePrice=document.querySelectorAll('.StoragePrice')[2];
			StoragePrice.innerText="NT$23,900";
			let StoragePrice2=document.querySelectorAll('.StoragePrice')[3];
			StoragePrice2.innerText="NT$28,200";
			_storage='256GB'
			flag=2;
			open();
		});

		onlyWifi.addEventListener("click",function () {
			_network='Wi-Fi';
			let object= ipad.filter(item=>item.color==_color&&item.storage==_storage&&item.network==_network);
			console.log(object[0]);
			let Cart=document.querySelector('.Cart');
			let totalprice=document.querySelector('#totalPrice');
			totalprice.innerText=`NT$ ${object[0].price}`;
			Cart.innerText=`NT$ ${object[0].price}`;
		});
		wifi.addEventListener("click",function () {
			_network='Cellular';
			let object= ipad.filter(item=>item.color==_color&&item.storage==_storage&&item.network==_network);
			console.log(object[0]);
			let Cart=document.querySelector('.Cart');
			let totalprice=document.querySelector('#totalPrice');
			totalprice.innerText=`NT$ ${object[0].price}`;
			Cart.innerText=`NT$ ${object[0].price}`;
		});
		function open() {
			if(flag==1){
			btnStorage64.disabled=false;
			btnStorage256.disabled=false;
			}
			else if(flag==2){
				onlyWifi.disabled=false;
				wifi.disabled=false;
			}
		};

		

	};
	xhr.open("GET",url);
	xhr.send();
}

