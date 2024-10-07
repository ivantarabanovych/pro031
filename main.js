
//генератор послідовності натуральних чисел
function* naturalNumbersGenerator(){
    let num = 1;
    while(true){
        yield num;
        num +=2;
    }
}

const generator = naturalNumbersGenerator();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log("---------------------------------");

//генератор фібоначчі
function* fibonacciGenerator(){
    let [a, b] = [0, 1];
    while(true){
        yield a;
        [a, b] = [b, a + b];
    }
}

const fibGener = fibonacciGenerator();
console.log(fibGener.next().value);
console.log(fibGener.next().value);
console.log(fibGener.next().value);
console.log(fibGener.next().value);
console.log(fibGener.next().value);
console.log("---------------------------------");

//генерація масиву чисел, збільшених на 1
function* Array(arr){
    for(let num of arr){
        yield num + 1;
    }
}

const arr = [1, 2, 3, 4, 5];
const genArray = Array(arr);
console.log(genArray.next().value);
console.log(genArray.next().value);
console.log(genArray.next().value);
console.log(genArray.next().value);
console.log(genArray.next().value);
console.log("---------------------------------");

//генерація простих чисел
function* primeNumbersGenrator(){
    let num = 2;
    while(true){
        if (isPrime(num)) {
            yield num;
        }
        num++;
    }
}

function isPrime(num){
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++){
        if (num % i ===0) return false;
    }
    return num > 1;
}

const primeGen = primeNumbersGenrator();
console.log(primeGen.next().value);
console.log(primeGen.next().value);
console.log(primeGen.next().value);
console.log(primeGen.next().value);
console.log(primeGen.next().value);
console.log("---------------------------------");

//генерація геометричної прогресії
function* geometricProgrestion(start, ratio, length) {
    let value = start;
    for (let i = 0; i < length; i++) {
        yield value;
        value *= ratio;

    }
}

const geomProg = geometricProgrestion(2, 3, 5);
console.log([...geomProg]);

//приклад використання next()
function* exampleNext() {
    yield 1;
    yield 2;
    yield 3;
}

const example = exampleNext();
console.log(example.next().value);
console.log(example.next().value);
console.log(example.next().value);





