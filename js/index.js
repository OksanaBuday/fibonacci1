var n = Number(prompt('Введіть n (цикл)'));
var n = Number(prompt('Введіть n (рекурсія)'));

function fib(n) {
    var a = 1;
    var b = 1;
    for (var i = 3; i < n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
function fib(n) {
    if (n == 1)
        return 1;
    else if (n == 2) 
        return 1;
    else return (fib(n - 1) + fib(n - 2));
}
document.write('Ви ввели ' + n + '<br>' + 'Число Фібоначчі буде:');
document.write(fib(n));
document.write('<br>');
document.write('Ви ввели ' + n + '<br>' + 'Число Фібоначчі буде:');
document.write(fib(n));
