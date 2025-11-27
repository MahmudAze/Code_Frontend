let array = [23, 223, 232, -23, 434, 0];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
    
}

let word = "Salam";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    
    reversed += word[i];
}

console.log(`Normal word: ${word}`);
console.log(`Normal word: ${reversed}`);