const counter = () => {

    let count = 0;

    return () => count += 1;

}

const generateId = counter();