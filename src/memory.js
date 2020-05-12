var cache = {}
var size = 0;

const get = index => typeof cache[index] !== 'undefined' ? cache[index] : null;
const set = (index, value) => {
    if (typeof cache[index] === 'undefined') {
        cache[index] = [];
    }
    cache[index].push(value);
    size++;
}
const size = () => {
    return size;
}
const pop = (index, value) => {
    if (index > size) {
        pop(size, value);
    }
    if (typeof cache[index] === 'undefined') {
        return null;
    }
    const valueAtIndex = cache[index].indexOf(value);
    if(valueAtIndex != -1){
        cache[index].splice(valueAtIndex, 1);
    }
    return valueAtIndex;
}