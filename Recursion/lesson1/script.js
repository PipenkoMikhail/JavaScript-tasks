//итеративный способ написания функции возвредения в степень
function pow(x, n) {
    let result = 1;
    for (i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
alert(pow(5, 5));

//рекурсивный способ написания функции возведения в степень
function powe(x, n) {
    if(n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
setTimeout('alert(powe(5, 5))', 2000);