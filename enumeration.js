//Check how enumeration works
//Use hasOwnProperty

if (typeof Object.beget !== 'function') {
    Object.beget = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    }
}

var bertram = {name: 'Berty', 'age': 25};
var wooster = Object.beget(bertram);
wooster.name = 'Wooster';

for (prop in wooster) {
    if (wooster.hasOwnProperty(prop)) {
        console.log(wooster[prop]);
    }
}
