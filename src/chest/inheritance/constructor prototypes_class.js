class Wolf {

	constructor(name) {
		this.name = name;
	}
	howl() {
		console.log(this.name + ': awooooo');
	}
}

class Dog extends Wolf {

	constructor(name) {
		super(name + ' the dog')
	}
	woof() {
		console.log(this.name + ': woof');
	}
}

const rufus = new Dog('Rufus');

rufus.howl();
rufus.woof();