let myHeading = document.querySelector('h1')
myHeading.textContent = 'Hello world!'

// document.querySelector('html').onclick = function() {
// 	alert('别戳我，我怕疼。')
// }

let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src')
	if(mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute('src', 'images/firefox-icon2.jpeg')
	}else {
		myImage.setAttribute('src', 'images/firefox-icon.png')
	}
}


let myButton = document.querySelector('button')

function setUserName() {
	let myName = prompt('请输入你的名字');
	if(!myName) {
		setUserName()
	}
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
}else {
	let storeName = localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla 酷毙了，' + storeName;
}
myButton.onclick = function() {
	setUserName();
}