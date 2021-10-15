// class Test {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	shout() {
// 		console.log(this);
// 	}
// }

// const user = new Test('Preston');

// user.shout();

// const user1 = new Test('Justin');

// user1.shout();

// const user2 = Test;

// console.log(user2);

// const user3 = new user2('Lard');

// console.log(user3.shout());
// console.log(this);

// console.log(window);

// window.addEventListener('resize', () => {
// 	console.log('What did you just do????');
// });

// console.log(document);

// const p = document.createElement('p');
// p.innerText = 'Test Mother Trucker';
// document.body.append(p);

// document.querySelector('#div-id').innerHTML = 'Got you';
// document.querySelector('.div-class').innerHTML = 'Hahahaha';

// const data = document.querySelector('[data-test]');
// data.innerHTML = 'Mehehehaheha I got you';

// let div = Array.from(document.querySelectorAll('.div-class'));

// div.map((el) => (el.innerHTML = 'sup'));

// const input = (document.querySelector('input').value = 'Yep yep');

// const btn = document.querySelector('[data-button]');
// const input = document.querySelector('input');
// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	console.log(input.value);
// 	input.value = null;
// });

// input.addEventListener('input', (e) => {
// 	console.log(e.target.value === '' ? (input.style.borderColor = 'red') : (input.style.borderColor = 'green'));
// });

// function printClick() {
// 	console.log('clicked');
// 	btn.removeEventListener('click', printClick);
// }

// btn.addEventListener('click', printClick);

// const link = document.querySelector('a');
// // link.addEventListener('click', (e) => {
// // 	e.preventDefault();
// // 	if (document.body.style.backgroundColor === 'pink') {
// // 		document.body.style.backgroundColor = 'white';
// // 	} else {
// // 		document.body.style.backgroundColor = 'pink';
// // 	}
// // });

// link.addEventListener('click', function() {
// 	// console.log(this);
// 	let test = () => {
// 		console.log(this);
// 	};
// 	test();
// });

// const btn = document.querySelector('button');
// btn.addEventListener('click', (e) => {
// 	console.log('Arrow');
// 	console.log(this);
// });

// btn.addEventListener('click', function(e) {
// 	let test = function() {
// 		console.log(this);
// 	};
// 	test();
// });

// const obj = {
// 	name: 'Preston',
// 	type: {
// 		name: 'Larry',
// 		type: {
// 			name: 'Harry',
// 			type: this
// 		}
// 	}
// };
// console.log(obj.type);

// const buttons = document.querySelectorAll('button');

// buttons.forEach((btn) => {
// 	btn.addEventListener('click', () => {
// 		let clicks = parseInt(btn.dataset.clicks);
// 		btn.dataset.clicks = clicks + 1;
// 		btn.dataset.test = 'Testing';
// 		btn.dataset.id = new Date();
// 		console.log(clicks);
// 	});
// });
// let test = document.querySelectorAll('.child')[1];

// test.style.backgroundColor = 'red';

// test.previousElementSibling.innerHTML = 'haha';

// test.parentElement.style.backgroundColor = 'pink';

// test.parentElement.parentElement.style.backgroundColor = 'orange';

// test.parentElement.nextElementSibling.style.backgroundColor = 'cadetblue';

// const grandParent = document.querySelector('#grand-parent');

// grandParent.style.color = 'red';

// grandParent.children[0].style.color = 'pink';
// grandParent.children[0].nextElementSibling.style.color = 'orange';

const form = document.querySelector('form');
const list = document.querySelector('#list');
// const list = document.querySelector('#list');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const div = document.createElement('div');
	if (input.value.trim() === '') return (input.value = 'enter something valid');
	div.innerText = input.value.trim();
	list.append(div);
	input.value = null;
});

list.addEventListener('click', (e) => {
	e.target.remove();
});
