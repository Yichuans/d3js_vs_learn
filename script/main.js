var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world';


function myadd(arg1,arg2){
	return arg1+arg2;

}

// alert(myadd(1,2));
// alert(myadd('1', '2'));
// alert(myadd("1", "2"));

// document.querySelector('html').onclick = function(){
// 	alert('clicked html');
// 	myHeading.innerHTML = 'Clicked HTML and now changed H1';
// }

var myimg = document.querySelector('img');

myimg.onclick = function(){
	var mysrc=myimg.getAttribute('src');
	if (mysrc === 'images/firefox-icon.png'){
		myimg.setAttribute('src', 'images/firefox-icon2.png');
	} else {
		myimg.setAttribute('src', 'images/firefox-icon.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}