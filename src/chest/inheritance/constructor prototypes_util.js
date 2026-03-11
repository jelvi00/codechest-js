const util = require('util');

function Wolf(name) {
	this.name = name;
}

Wolf.prototype.howl = function () {
	console.log(this.name + ': awoooooo');
}

function Dog(name) {
	Wolf.call(this, name + ' the dog');
}

Dog.prototype.woof = function () {
	console.log(this.name + ': woof');
}

//Object.setPrototypeOf(Dog.prototype, Wolf.prototype)
util.inherits(Dog, Wolf);

const rufus = new Dog('Rufus')

rufus.woof();
rufus.howl();