let arr = [1, 2, 3, 4, 5];

let sumArr = arr.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of elements: ${sumArr}`);

let avgArr = sumArr / arr.length;
console.log(`Average of elements: ${avgArr}`);

let maxVal = Math.max(...arr);
let minVal = Math.min(...arr);
console.log(`Maximum value: ${maxVal}`);
console.log(`Minimum value: ${minVal}`);

let prodArr = arr.reduce((acc, curr) => acc * curr, 1);
console.log(`Product of elements: ${prodArr}`);

let sortedArr = [...arr].sort((a, b) => a - b); 
console.log(`Sorted array: ${sortedArr}`);
