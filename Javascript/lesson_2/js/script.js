var names = [];
var my_name = null;
var hasname = false;

// Заполнение массива 5-ю именами
for(var i=0; i<5; i++){
	names[i] = prompt('введите имя');
}
console.log(names);

// Получение своего имени
my_name = prompt('введите свое имя');
console.log(my_name);

// Проверяем есть ли свое имя в массиве
for(var i=0; i<names.length; i++) {
	if (my_name == names[i]) {
		hasname = true;
	}
}

// Выводим сообщение об ошибке или успехе
if (hasname == true) {
	alert(my_name + ', вы успешно вошли');
} else {
	alert('Ошибка, такого имени нет в списке!');
}