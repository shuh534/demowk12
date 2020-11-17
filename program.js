var fruits = document.getElementsByClassName('fruit');
var veggies = document.getElementsByClassName('veggie');
var buttons = document.getElementsByClassName('button_style');

// change the css of every single element in the fruit list
for (i=0; i < fruits.length; i++) {
	fruits[i].classList.add('button_style');
}

for (i=0; i < veggies.length; i++) {
	veggies[i].classList.add('button_style');
}

for (i=0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function(){
		this.style.backgroundColor = "#0ad77b";
	});

	buttons[i].addEventListener('mouseenter', function(){
		this.style.backgroundColor = "black";
	});
}

function addIdleApples(){
	var d = new Date();
	d.getSeconds();
	var screenSaveContainer = document.getElementById('screenSaver');
	if (screenSaveContainer.childElementCount < 50) {
		// console.log(screenSaveContainer.children);
		var newApple = document.createElement('img');
		newApple.src = "pics/apple.png";
		newApple.style.left = 1500 * Math.random() + "px";
		newApple.style.top = 1550 * Math.random() + "px";
		newApple.classList.add('idle');
		screenSaveContainer.appendChild(newApple);
	}
}

setInterval(addIdleApples, 1000);
