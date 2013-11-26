Function.prototype.curry = function curry () {
    var slice = Array.prototype.slice;
    var that = this;
    var outerArguments = slice.apply(arguments);
    return function () {
        return that.apply(null, outerArguments.concat(slice.apply(arguments)));
    };
};

//Adds numbers
var add = function () {
    var result=0;
    for (each in arguments) {
        result += arguments[each];
    }
    return result;
};

//Create a function that adds
//1 to the result of add()
var curriedAdd = add.curry(1);

//should result 9
var result = curriedAdd(3, 5);

console.log(result);
