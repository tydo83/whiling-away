console.log('Question1');
function Question1() {
    let n = 1;
    while(n < 6) {
        console.log(n);
        n++;
    }
}
Question1();

console.log('Question2');
function Question2(num) {
    let n = 1;
    while(n <= num) {
        console.log(n);
        n++;
    }
}
Question2(6);
Question2(3);

console.log('Question3');
function Question3(num1, num2) {
    while(num1 <= num2) {
        console.log(num1);
        num1++
    }
}
Question3(3, 8);
Question3(-2, 1)

console.log('Question4');
function Question4(num) {
    let n = 1;
    while(n <= num) {
        console.log(n);
        if(n % 2 == 0) console.log('Even');
        else console.log('Odd');
        n++;
    }
}
Question4(5);

console.log('Question5');
function Question5(num) {
    let n = 1;
    while(n <= num) {
        if(n % 2 ==0) {
            console.log(n);
        }
        n++;
    }
}
Question5(10);

console.log('Question6');
function Question6() {
    let n = 10;
    while(1 <= n) {
        console.log(n);
        n--;
    }
}
Question6(10);

console.log('Question7');
function Question7() {
    let n = 10;
    while(1 <= n) {
        console.log(n);
        n--;
    }
    console.log('Blast Off!');
}
Question7();

console.log('Question8');
function Question8(num) {
    let n = 1;
    while(num > n) {
        console.log(num);
        num-=3;
    }
}
Question8(20);

console.log('Question9');
function Question9() {
    n = 1;
    while(n <=7) {
        console.log(n + '. Hello!');
        n++;
    }
}
Question9();

console.log("Question10");
function Question10(str) {
    n = 1;
    while(n <= 7) {
        console.log(n +'. ' + str);
        n++;
    }
}
Question10('Hello World!!');

console.log("Question11");
function Question11(str, num) {
    n = 1;
    while(n <= num) {
        console.log(n + '. ' + str);
        n++;
    }
}
Question11('Good-bye...',4);
Question11('Get Out!', 6);

console.log('Question12');
function Question12(str) {
    n = 0;
    while(n <= str.length-1) {
        console.log(str[n]);
        n++;
    }
}
Question12('think');

console.log('Question13');
function Question13(str) {
    n = 0;
    while(n <= str.length-1) {
        if (n % 2 == 1) {
            console.log(str[n]);
        }
        n++;
    }
}
Question13('Nobody');

console.log('Question14');
function Question14(str) {
    n = str.length - 1;
    while(n >= 0) {
        console.log(str[n]);
        n--;
    }
}
Question14('Mesuara');

console.log('Question15');
function Question15(num) {
    let n = 1;
    while(n <= num) {
        if(n % 3 == 0 && n % 5 == 0) {
            console.log('FizzBuzz');
        }
        else if(n % 3 == 0) {
            console.log('Fizz');
        }
        else if(n % 5 == 0) {
            console.log('Buzz');
        } 
        else {
            console.log(n);
        }
        n++;
    }
}
Question15(15);

// need more practice 
console.log('Question16');
function Question16(num) {
    let x = 0, y = 1;
    let fib ;
    while(x <= num) {
        console.log(x);
        fib = x + y;
        x = y;
        y = fib;
        }
}
Question16(21); 
