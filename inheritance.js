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

Function.method('inherits', function(parentName){
    this.prototype = new parentName();
    return this;
});

var Mammal = function (name) {
    this.name = name;
}
var getName = function () {
    return this.name;
};
Mammal.method('getName', getName);

var Cat = function (name) {
    this.name = name;
}
Cat.inherits(Mammal)
    .method('purr', function () {
        console.log('purr');
    });

var cat = new Cat('pussy');
console.log(cat.getName());
cat.purr();
