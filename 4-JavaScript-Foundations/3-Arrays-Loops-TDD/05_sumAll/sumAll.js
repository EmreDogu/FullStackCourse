const sumAll = function(number1, number2) {
    let smaller = 0;
    let bigger = 0;
    let sum = 0;
    if (typeof(number1) != "number" || typeof(number2) != "number") {
        return "ERROR";
    }else if (number1<0 || number2<0) {
        return "ERROR";
    }else if (number1>number2) {
        bigger = number1;
        smaller = number2;
    }else {
        bigger = number2;
        smaller = number1;
    }

    for (smaller ; smaller<=bigger ; smaller++) {
        sum += smaller;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
