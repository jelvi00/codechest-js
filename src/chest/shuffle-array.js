export const shuffleArray = (array) => {
    return array.sort(() => 0.5 - Math.random())
};

export const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

function make() {

    const items = ['$100', '🍫', '🍔'];

    console.log(getRandomElement(items));

    console.log(shuffleArray(items));
}

make();
