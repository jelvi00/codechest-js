
const wolf = (name) => {

	const howl = () => {
		console.log(name + ': Awooo');
	};

	return { howl };
}

const dog = (name) => {

	name = name + ' the dog';

	const woof = () => {
		console.log(name + ': Woof');
	};

	return {
		...wolf(name),
		woof
	};

}

const rufus = dog('Rufus');

rufus.howl();
rufus.woof();
