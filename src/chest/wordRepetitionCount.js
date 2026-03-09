
let text = 'Nuevas ofertas. Diario. Puedes pedir "Alexa, ¿cuáles son mis ofertas?" en cualquier dispositivo de nuestra familia Echo.'

const normalize = (word) => word.toLowerCase().replace(/[\W_]+/g, '');

const wordRepetitionCount = (text) => {

    let dict = {};

    let separatedWords = text.split(' ');

    for (let word of separatedWords) {

        let normalized = normalize(word);

        normalized in dict ? (++dict[normalized]) : (dict[normalized] = 1);

    }

    return dict;

}

export {wordRepetitionCount}
