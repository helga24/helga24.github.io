var base = prompt('Укажите число');
var exp = prompt('Укажите степень предідущего числа');
var result = 1;

for (var i = 0; i < exp; i++ ) {
	result = result * base;
}

console.log('Result', result);