
const slugify = (str) => {

    if (!str || typeof str !== 'string' || !str.trim()) return;

    return str.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');

}


function make() {
    console.log(slugify('The first post: What is going on?'));
}

make();
