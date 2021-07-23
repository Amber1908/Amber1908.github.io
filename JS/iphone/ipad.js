let Url="https://raw.githubusercontent.com/Amber1908/Amber1908.github.io/master/JS/iphone/ipad.json";

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
	xhr.onload=function () {
		ipadArray=this.response;
		console.log(ipadArray );
	} ;
	xhr.open("GET",Url);
	xhr.send();
}
let btnColorGray=document.querySelectorAll('.btnColor')[0];
btnColorGray.addEventListener('click',function  () {
	let Itemimg=document.querySelector('.Img');
	Itemimg.src=ipadArray[0].imgUrl;
	
})