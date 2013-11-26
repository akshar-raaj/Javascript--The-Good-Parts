var fibonacci = function (n) {

    var map = {0:0, 1:1};
    
    var fun = function (n) {
        var result;
        if (typeof map[n] === 'number') {
            return map[n];
        }
        result = (n>1) ? (fun(n-1) + fun(n-2)) : n;
        map[n] = result;
        return result;
    }
    return fun;
}();

for (i=0; i<10; i++) {
    console.log(fibonacci(i));
}
