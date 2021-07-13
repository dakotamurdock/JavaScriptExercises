const reverseString = function(word) {

    let revWord = ""

    for(i = word.length; i >= 0; --i){
        revWord = revWord + word.slice(i, i + 1);
    }

    return revWord;
};

module.exports = reverseString;
