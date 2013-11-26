//Every function will have a method named 'method'
//available with below code
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
}

//Write a constructor function
var Man = function (name) {
    this.name = name;
}

var printName = function () {
    console.log(this.name);
};
Man.method('printName', printName);

var man = new Man('Yeoman');
man.printName();




//Add a method to get integer part of a number
var integer = function () {
    return Math.floor(this);
};
Number.method('integer', integer);

console.log((5/2).integer());
