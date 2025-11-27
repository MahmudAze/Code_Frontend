// Task 1

function isDivisibleBy3And5(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "It is divisible";
  }
  return "It is not divisible!";
}

console.log(`Number: 30 -> ${isDivisibleBy3And5(30)}`);

console.log(`Number: 25 -> ${isDivisibleBy3And5(25)}`);

// Task 2

function factorial(num) {
  if (num == 0) {
    return 1;
  }

  return factorial(num - 1) * num;
}

console.log(`6!: ${factorial(6)}`);

// Task 3

function SumOfSquaredNumbersInArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        let x = Math.abs(array[i])
        sum += Math.pow(x, 2);
    }
  }

  return sum;
}

let arr = [23, 10, 14, 7, -2];

console.log(`Array: ${arr} \nSum: ${SumOfSquaredNumbersInArray(arr)}`);

// Task 4

function Login(email, password) {
    if (email == "emil@code.edu.az" && password == "12345") {
        return "Girish olundu";
    }
    return "Mail ve yaxud password sehvdir";
}

console.log(`Email: emil@code.edu.az \nPassword: 12345678 \nNetice: ${Login("emil@code.edu.az", "12345678")}`);
console.log(`Email: emil@code.edu.az \nPassword: 12345 \nNetice: ${Login("emil@code.edu.az", "12345")}`);


// Task 5

function SumOfOddNumbersInArray(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0){
            let x = Math.abs(array[i]);
            sum += x;
        }
        
    }

    return sum;
}

let arr1 = [23, 10, 14, 7, -2, -5];

console.log(`Array: ${arr1} \nSum: ${SumOfOddNumbersInArray(arr1)}`);

// Task 6

function CountOfEvenNumbersInArray(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0){
            let x = Math.abs(array[i]);
            count++;
        }
        
    }

    return count;
}

let arr2 = [23, 10, 14, 7, -2, -5];

console.log(`Array: ${arr2} \nCount: ${CountOfEvenNumbersInArray(arr2)}`);
