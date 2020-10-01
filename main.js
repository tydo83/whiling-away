function challenge1() {
    let num = 1;
    while (num <= 5) {
        console.log(num);
        num = num + 1;
    }
}

// challenge1();

function challenge2(max) {
    let num = 1;
    while (num <= max) {
        console.log(num);
        num = num + 1;
    }
}

// challenge2(6);

function challenge3(min, max) {
    let num = min;
    while (num <= max) {
        console.log(num);
        num = num + 1;
    }
}

// challenge3(3, 8);

function challenge4(max) {
    let num = 1;
    while (num <= max) {
        console.log(num);
        if (num % 2 === 0) {
            console.log("Even");
        } else {
            console.log("Odd");
        }

        num = num + 1;
    }
}

// challenge4(5);

function challenge5(max) {
    let num = 2;
    while (num <= max) {
        if (num % 2 === 0) {
            console.log(num);
        }

        num = num + 1;
    }
}

// challenge5(10);

function challenge6() {
    let num = 10;
    while (num >= 1) {
        console.log(num);
        num = num - 1;
    }
}

// challenge6();

function challenge7() {
    let num = 10;
    while(num >= 1) {
        console.log(num);
        num = num - 1;
    }

    console.log('Blast off!');
}

// challenge7();

function challenge8(num) {
    while (num >= 1) {
        console.log(num);
        num = num - 3;
    }
}

// challenge8(20)

function challenge9() {
    let num = 1;
    while (num <= 7) {
        console.log(num + '. Hello!');
        num = num + 1;
    }
}

// challenge9();

function challenge10(str) {
    let num = 1;
    while (num <= 7) {
        console.log(num + '. ' + str);
        num = num + 1;
    }
}

// challenge10('hi')

function challenge11(str, max) {
    let num = 1;
    while (num <= max) {
        console.log(num + '. ' + str);
        num = num + 1;
    }
}

// challenge11('Good bye...', 4);
// challenge11('Get out!', 6);

function challenge12(str) {
    let i = 0;
    while (i < str.length) {
        console.log(str[i]);
        i = i + 1;
    }
}

// challenge12('think');

function challenge13(str) {
    let i = 1;
    while (i < str.length) {
        console.log(str[i]);
        i = i + 2;
    }
}

// challenge13('Nobody');

function challenge14(str) {
    let i = str.length - 1;
    while (i >= 0) {
        console.log(str[i]);
        i = i - 1;
    }
}

// challenge14('Mesuara');

function challenge15(max) {
    let num = 1;
    while (num <= max) {
        if (num % 5 === 0 && num % 3 === 0) {
            console.log('FizzBuzz');
        } else if (num % 3 === 0) {
            console.log('Fizz');
        } else if (num % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(num);
        }

    num = num + 1;
    }
}

// challenge15(15);

function challenge16(max) {
    let num1 = 0;
    let num2 = 1;
    while (num1 <= max) {
        console.log(num1);
        let temp = num2;
        num2 = num2 + num1;
        num1 = temp;
    }
}

// challenge16(21);
