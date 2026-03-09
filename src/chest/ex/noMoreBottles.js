
const sign = (n, result) => {

    let str = (n || 'No more') + ' bottles';

    !result && (result = []);

    result.push(str);

    return n ? sign(n - 1, result) : result;

}

export default sign;
