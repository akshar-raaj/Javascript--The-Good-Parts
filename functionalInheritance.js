if (typeof Object.beget !== 'function') {
    Object.beget = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
}

var getSuperClassFunction = function (func) {
    var that = this;
    return function () {
        return func.apply(that, arguments);
    };
};

Object.method('superclass', getSuperClassFunction);

var mammal = function (specs) {
    var that = {};
    var getName = function () {
        return specs.name;
    };
    var say = function () {
        return specs.saying || '';
    };
    that.getName = getName;
    that.say = say;
    return that;
}

var whale = mammal({name: 'Whale'});
console.log(whale.getName());

var cat = function (specs) {
    var that = mammal(specs);

    var superClassFunction = that.superclass(that.say);
    var say = function () {
        return "Meow " + superClassFunction();
    };
    that.say = say;
    return that;
};

var pussy = cat({name: 'Pussy', saying: 'pussy'});
console.log(pussy.getName());
console.log(pussy.say());
