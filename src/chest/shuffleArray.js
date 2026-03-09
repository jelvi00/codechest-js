export const shuffleArray = (array) => {
    return array.sort(() => 0.5 - Math.random())
};

export const getRandomValue = array => array[Math.floor(Math.random() * array.length)];
const prizes = ['$100', '🍫', '🍔'];