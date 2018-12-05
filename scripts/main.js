var change=document.querySelector('h1');
change.textContent="hello world";
document.querySelector('h1').onclick=function()
{
	alert("you clicked on h1");
}
var myImg=document.querySelector('img');
myImg.onclick=function()
{
	var mySrc=myImg.getAttribute('src');
	if(mySrc==='images/img1.jpg')
	{
		myImg.setAttribute('src','images/img2.jpg');
	}
	else if(mySrc==='images/img2.jpg')
	{
		myImg.setAttribute('src','images/img1.jpg');
	}
}