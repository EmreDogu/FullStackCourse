const reverseString = function(word) {
    let expected="";
    for (let i = word.length-1; i>-1; i--) {
        expected+=word[i];
    }
    return expected;
};

// Do not edit below this line
module.exports = reverseString;
