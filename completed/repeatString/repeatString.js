const repeatString = function(word, num) {

    let repeat = "";

    if(num >= 0){
        for(i = 0; i < num; ++i) {
            repeat = repeat + word;
        }
    }
    else {
        repeat = "ERROR";
    }

    return repeat;

};

module.exports = repeatString;
