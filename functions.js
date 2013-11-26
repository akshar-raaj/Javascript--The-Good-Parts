var sum = function (a, b) {
    return a+b;
};
var object = {
    value: 0,
    increment: function (inc) {
        this.value = this.value + (typeof inc === 'number' ? inc: 1)
    },

    closureIncrement: function (inc) {
        var that = this;
        var inner = function () {
            that.value = sum(that.value, that.value);
        }();
    }
};

object.increment();
console.log(object.value);
object.increment(2);
console.log(object.value);
object.closureIncrement(2);
console.log(object.value);
