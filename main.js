function mySum (a, b) {
    return a+b;
}

mySum (52, 35);

function myDif (a, b) {
    return a-b;
}

myDif (45, 21);

function myFra (a, b) {
    renturn a/b;
}

myFra (16, 4);

function myPro (a, b) {
    return a*b;
}

myPro (5, 21);

function myPow(a, n) {
    var b = a;
    for (var i = 1; i < n; i++) {
        b *= a;
    }
    return b;
}

myPow(6, 3);

function myRad (a) {
    return Math.sqrt(a);
}

myRad (9);

function myCos (a) {
    return Math.cos(a);
}

myCos (3);

function mySin (a) {
    return Math.sin(a);
}

mySin (1);

function myFac(n) {
    return n ? n * myFac(n - 1) : 1;
}

myFac (6);