let items = document.querySelectorAll('li')
let arr = []
for (let item of items) {
	arr.push(item.textContent)

}
arr = JSON.stringify(arr)
console.log(arr)
let json = '["Вадим", "Игорь", "Алексей", "Диана", "Юрий"]'
json = JSON.parse(json)
json.push('Алиса')
json = JSON.stringify(json)
console.log(json)

let json2 = `[
	{
		"name": "Diana",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "Yuri",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "Anastasia",
		"age": 27,
		"salary": 3000
	}
]`;
console.log(json2)
json2 = JSON.parse(json2)
console.log(json2)
json2.push({
	name: 'Kupava',
	age: 14,
	salary: 800
})
console.log(json2)
json2 = JSON.stringify(json2)
console.log(json2)

let json8 = '["user1","user2","user3","user4","user5"]';
json8 = JSON.parse(json8)
let ul = document.createElement('ul')
for (let user of json8) {
	let li = document.createElement('li')
	li.textContent = (json8.user);
	ul.appendChild(li)
}
console.log(ul)


