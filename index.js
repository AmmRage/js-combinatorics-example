import * as Combinatorics from 'js-combinatorics';

console.log(Combinatorics);
//
console.log('枚举排列');
let it = new Combinatorics.BaseN('ab', 2);
console.log([...it]);

//
console.log('从数组形成排列');
let cartesianProduct = new Combinatorics.CartesianProduct('01','ab','xy');
console.log([...cartesianProduct]);

//
console.log('列出集合所有子集合');
let powerSet = new Combinatorics.PowerSet('abc');
console.log([...powerSet]);

//
console.log('列出数字范围所有子集合，从0~n-1的范围取K的数字');
const c16_8 = Combinatorics.combinadic(3, 2);
console.log(c16_8(0));
console.log(c16_8(2));

//
console.log('获取组合数量');
console.log(Combinatorics.combination(7, 2));

//
console.log('返回数字的阶乘因式分解');
console.log('12 = 0 * 0! + 0 * 1! + 0 * 2! + 2 * 3!');
console.log(Combinatorics.factoradic(12));


//
console.log('阶乘');
console.log(Combinatorics.factorial(5));

//
console.log('获取排列数量');
console.log(Combinatorics.permutation(7, 2));

//
console.log('获得随机数');
console.log(Combinatorics.randomInteger(54));
