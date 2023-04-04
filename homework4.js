// Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
  }

console.log(checkAge(19));

// Функция pow(x,n)
function mathPow (x, n) {
    console.log(Math.pow(x, n));
}

mathPow(3, 2);

// Перепишите с использованием функции-стрелки
let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask("Вы согласны?", () => { alert("Вы согласились.") }, () => { alert("Вы отменили выполнение.") } );

// Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];

arr.sort(function(a, b){return b-a});

alert( arr ); 

// Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names );

// Трансформировать в объекты
vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };

users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // Вася Пупкин

// Получить средний возраст
vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };

let arr1 = [ vasya, petya, masha ];

function sortByAge(item) {
    item.sort((a, b) => a.age > b.age ? 1 : -1);
}
sortByAge(arr1);

alert(arr1[0].name); // Вася
alert(arr1[1].name); // Маша
alert(arr1[2].name); // Петя