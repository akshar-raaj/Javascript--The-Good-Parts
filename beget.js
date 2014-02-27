//An object literal
var harry = {name: 'Harry', school: 'Hogwarts'};

if (typeof Object.beget !== 'function') {
    Object.beget = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

console.log(harry.name);
console.log(harry.school);

var ron = Object.beget(harry);
ron.name = 'Ron';

console.log(ron.name);
console.log(ron.school);
console.log(ron.type);

//Prototype chains are dynamic
harry.type = 'Wizard'

console.log(ron.name);
console.log(ron.school);
console.log(ron.type);
