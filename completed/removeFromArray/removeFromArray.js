const removeFromArray = function(array, ...removeArray) {

    
        removeArray.forEach( item => {
            for (let i = 0; i < array.length; ++i){
                if (item === array[i]) {
                    array.splice(i, 1);
                };
            };
        });

    return array;
};

module.exports = removeFromArray;
