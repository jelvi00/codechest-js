
function Wolf(name) {
	this.name = name;
}

Wolf.prototype.howl = function () {
	console.log(this.name + ': awoooooo');
}

function Dog(name) {
	Wolf.call(this, name + ' the dog');
}

Dog.prototype = Object.create(Wolf.prototype);

Dog.prototype.woof = function () {
	console.log(this.name + ': woof');
}

const rufus = new Dog('Rufus')

rufus.woof();
rufus.howl();