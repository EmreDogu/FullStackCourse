const repeatString = function(word, times) {
    let expected = "";
    if (times<0) {
        return "ERROR";
    }
    for (let i=0; i<times; i++) {
        if (word == "") {
            continue;
        }
        expected += word;
    }
    return expected;
};

// Do not edit below this line
module.exports = repeatString;
