// // let printName = (name) => {
// // 	console.log(name);
// // };
// // printName('Preston');

// // let printHi = (name) => `Hi ${name}`;

// // console.log(printHi('Preston'));

// // function func(x, callback) {
// // 	callback(x);
// // }
// // func(10, (x) => console.log(x));

// // console.log('hello');

// // let p = document.querySelector('p');
// // document.body.innerHTML;
// // p.innerHTML = 'test';

// // console.log('hello');

// // console.log('hello');

// // console.log('test');

// // let test = document.querySelectorAll('p');

// // console.log(test);

// // console.log(sum(1, 2));
// // console.log(sumArrow(1, 2));
// // function sum(a, b) {
// // 	return a + b;
// // }
// // sumStandard(1, 2);

// // let sumArrow = (a, b) => {
// // 	return a + b;
// // };

// // let a = 1;
// // console.log(a);
// // function sayHi(name) {
// // 	a = 4;
// // 	let result = `Hi ${name} ${a}`;
// // 	console.log(result);
// // }
// // console.log(result);

// // sayHi('Preston');

// // function print(variable) {
// // 	return function func(variable2) {
// // 		console.log(variable2);
// // 		console.log(variable);
// // 	};
// // }

// // let a = print(1);
// // console.log(a(6));

// // let a = 1;

// // console.log(a);

// // for (var a = 0; a < 10; a++) {}
// // console.log(a);

// // {
// // 	let a = 20;
// // }

// // const a = 22;

// // console.log(a);

// // const f = function(a) {
// // 	console.log(a + 2);
// // };
// // f(2);

// // f(6);

// // function g(a, b) {
// // 	return a * b;
// // }
// // console.log(2 * 5);

// // let h = (a) => a % 3;

// // let text = '22.34rem';

// // console.log(Math.ceil(parseFloat(text)));

// // function min(a,b) {
// // 	return Math.max(a,b)
// // }

// // console.log(min(100,111))

// // function isEven(n) {
// // 	if (n === 0) {
// // 		return true;
// // 	} else if (n === 1) {
// // 		return false;
// // 	}
// // 	if (n >= 0) {
// // 		return isEven(n - 2);
// // 	} else {
// // 		return isEven(n + 2)
// // 	}
// // }

// // function isEven(n) {
// // 	if (n == 0) return true;
// // 	else if (n == 1) return false;
// // 	else if (n < 0) return isEven(-n);
// // 	else return isEven(n - 2);
// // }

// // isEven(-20);
// // let n = -2;

// // console.log(-n);

// // function countBs(string, letter) {
// // 	string = string.toLowerCase();
// // 	let total = 0;
// // 	for (let i = 0; i < string.length; i++) {
// // 		if (string[i] === letter) total++;
// // 	}
// // 	return total;
// // }

// // console.log(countBs('BBbbBBbcletsbDD','d'));
// // console.log('HELLO');
// // const a = '5';
// // const b = 2;
// // // console.log(isNan(parseInt(a)));

// // console.log(isNaN(parseInt(b)));

// // console.log(parseInt(a) + b)

// // console.log(null == undefined)

// const a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// console.log(a);

// a.push(11);

// console.log(a);

// a.shift();
// console.log(a);
// a.push('hello');
// console.log(a);

// const shit = [ [ 'hi', 'bye' ], [ 1, 2 ] ];
// shit[1][0];

// const alpha = [ 'a', 'b', 'c', 'd', 'e' ];

// console.log(alpha[2]);

// const nums = [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ] ];

// console.log(nums[0][3], nums[1][2], nums[2][0]);

// nums.length;
// let name = 'Preston';
// const age = 31;
// const favNum = 6;

// // const person = {
// // 	name: 'Preston',
// // 	age: 31,
// // 	favNum: 6,
// // 	sayHi: function() {
// // 		console.log('Hi');
// // 	},
// // 	sayHiAgain() {
// // 		return 'Oh fuck yeah';
// // 	}
// // };

// const math = {
// 	times(a, b) {
// 		return a * b;
// 	},
// 	add(a, b) {
// 		return a + b;
// 	},
// 	sub(a, b) {
// 		return a - b;
// 	},
// 	div(a, b) {
// 		return a / b;
// 	}
// };

// console.log(math.times(4, 4));

// // console.log(person.age);
// // person.sayHi();
// // console.log(person.sayHiAgain());

// const car = {
// 	make: 'Mazda',
// 	model: '3',
// 	isUsed: false,
// 	makeNoise() {
// 		console.log('Vroom');
// 	}
// };
// car.makeNoise();
// console.log(car.isUsed);

// const person = {
// 	name: 'Preston',
// 	address: {
// 		street: '5883 Homestead Court',
// 		city: 'Murray'
// 	},
// 	hobbies: [ 'music', 'soccer', 'coding', 'biking' ]
// };
// console.log(person.address.street);
// for (let i = 0; i < person.hobbies.length; i++) {
// 	console.log(person.hobbies[i]);
// }

// const book = {
// 	title: 'Lord of the Rings',
// 	author: {
// 		name: 'JRR Tolken',
// 		age: 'Old'
// 	}
// };
// console.log(book.author.age);

// book.title = 'The Hobbit';
// console.log(book.title);

// let a = 10;
// let b = 'hi';
// let c = a + 1;
// console.log(c);
// c = c + 1;
// console.log(c);

// console.log(typeof {});

// const d = [ 1, 2 ];
// let e = d;

// e.push(4);
// console.log(d);

// e[0] = 'hello';
// console.log();

// e = [ 33, 33, 34 ];
// console.log(d);

// let a = 10;
// let b = 'hi';
// let c = {
// 	name: 'Preston',
// 	age: 31
// };
// c = JSON.stringify(c);
// console.log(`c = ${c}`);

// c = JSON.parse(c)
// console.log(c)

// let a = [ 1, 2 ];
// let b = [ 1, 2 ];
// console.log(a === b);
let nam = 'PrESton';

console.log(nam[0].toUpperCase() + nam.substring(1).toLowerCase());

const a = [ 1, 2, 3, 4, 5 ];

// a.forEach((num) => console.log(num * 5));
// a.forEach((num, i) => console.log(`${num} + ${i}`));

// const b = a.map((num) => num * 2);

// console.log(b);

// console.log(b.filter((nums) => nums > 6));

// console.log(a.find((num) => num > 1));

// console.log(a.every((num) => num > 0));

console.log(a.reduce((sum, num) => sum + num));

const items = [ { priice: 24 }, { priice: 20 }, { priice: 20 }, { priice: 20 }, { priice: 20 }, { priice: 20 } ];

console.log(
	items.reduce((total, obj) => {
		return total + obj.priice;
	}, 0)
);

const a = [ 1, 2, 3, 4, 5 ];
