let first_num = 15;
let sec_num = 17;
let swap;

console.log(first_num, sec_num);

swap = first_num;
first_num = sec_num;
sec_num = swap;
console.log(first_num, sec_num);

let max = first_num > sec_num ? "maximum number" : "minimum number";
console.log(max);
