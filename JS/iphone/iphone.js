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

});