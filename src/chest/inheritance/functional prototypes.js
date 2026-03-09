const wolf = {
	howl: function () { console.log(this.name + ': Awoooo') }
};

//Second parameter is a Property Descriptor.
const dog = Object.create(wolf, {
	woof: { value: () => { console.log(this.name + ': Woof')} }
});

const rufus = Object.create(dog, {
	name: { value: 'Rufus the dog' }
});

rufus.woof.call(rufus);
rufus.howl.call(rufus);

console.log(Object.getPrototypeOf(rufus))
