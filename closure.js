var myObject = function () {
    var value = 0;

    return {
        increment: function () {
            value = value + 1;
        },
        getValue: function () {
            return value;
        }
    };
}();

console.log(myObject.getValue());
myObject.increment();
console.log(myObject.getValue());
console.log(myObject.value);
