var harry = function () {
    name = "harry";
    last_name = "potter";
    return {
        get_name: function () {
            return name;
        },
        set_name: function (new_name) {
            name = new_name;
            return this;
        },
    };
}();

console.log(harry.get_name());
harry.set_name("potter");
console.log(harry.get_name());
var name = harry.set_name("ron").get_name();
console.log(name);
