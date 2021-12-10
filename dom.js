//console.log(document.images);
//console.log(document.getElementById("header-title"));
//var headerTitle=document.getElementById("header-title");
var headerTitle=document.getElementById("main-header");
//console.log(headerTitle);
//headerTitle.textContent="hellooooooo";
//headerTitle.innerText="goodbyeeeeeee";
//console.log(headerTitle.innerText);
//headerTitle.innerHTML="<h3>hadi yahu<h3>";
//headerTitle.innerHTML="<p>ME TOO</p>";
headerTitle.style.borderBottom="solid 3px pink" ;
//querySelector
var titles=document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent='hello';

var odd =document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#ccc';
}


