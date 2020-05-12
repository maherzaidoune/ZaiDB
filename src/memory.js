var cache = {}

const get = index => typeof cache[index] !== 'undefined' ? cache[index] : null;
const set = (index, value) => {
    if (typeof cache[index] === 'undefined') {
        cache[index] = [];
    }
    cache[index].push(value);
}