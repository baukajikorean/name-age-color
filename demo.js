// this is a function which assigns values to object properties

function person(name, age, color) {
	this.name = name;
	this.age = age;
	this.color = color;
}

var x = new person(prompt('name'),prompt('age'),prompt('color'));

function nameshow() {
	document.write('Your name is ' + x['name']);
}
function colorshow() {
	document.write(x['name'] + "'s favourite color is " + x['color']);
}
function ageshow() {
	document.write(x['name'] + "'s age is " + x['age']);
}

person();

document.write();

function printer() {
	var x = prompt('Please, choose what you want us to show: 1-name, 2-age, 3-favcolor');
	if (x==1) {
		nameshow();
	}
	else if (x==2) {
		ageshow();
	}
	else {
		colorshow();
	};
};

printer();
