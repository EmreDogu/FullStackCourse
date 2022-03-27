const removeFromArray = function(... args) {
    let array = args[0];
    for (let i = 0; i<array.length ; i++) {
        if (args.includes(array[i])) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
