//Trying to figure out how 'apply()' works in js
//Guess it would be something similar to this.
if (typeof Function.prototype.dupApply === 'undefined') {
    //With this, every function will have a method
    //called dupApply available to it
    Function.prototype.dupApply = function (obj, args) {
        //this refers to the function
        return this(args[0], args[1]);
    }
}

var sum = function (a, b) {
    return a+b;
};

var arguments = [3, 4]
var result = sum.dupApply(null, arguments);
console.log(result);
