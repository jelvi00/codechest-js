function inherit(proto) {
	function ChainLink() {};
	ChainLink.prototype = proto;
	return new ChainLink();
}


function Wolf(name) {
	this.name = name;
}

Wolf.prototype.howl = function () {
	console.log(this.name + ': awoooooo');
}

function Dog(name) {
	Wolf.call(this, name + ' the dogo');
}

Dog.prototype = inherit(Wolf.prototype);

Dog.prototype.woof = function () {
	console.log(this.name + ': woof');
}

const rufus = new Dog('Rufus')

rufus.woof();
rufus.howl();