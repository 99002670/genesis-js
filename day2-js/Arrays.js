const elements = ["Apple", "Mango", 1, 2, 3, 4, "Orange", "Banana"];
for (const element of elements) {
    console.log(element);
}

let numbers = new Array(5);

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i;
}
console.log(numbers);

let num = [];
let index = 0;
do {
    num.push(index * 10);
    index++;
} while (index != 5);

console.log(num);
console.log(num.pop());
console.log(num);
console.log(num.shift());
console.log(num);
console.log(num.unshift(100));
console.log(num);
