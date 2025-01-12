// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];

// const names = people.map(peopleName => peopleName.age);
// console.log(names);
// names = [];
// for (person of people){
//     names.push(person.name);

// }
// console.log(names);



// const phoneNumbers = [1234567890, 9876543210, 5551234567];
// const formatedPhoneNumber = phoneNumbers.map(number => {
//     const str = number.toString();
//     return `(${str.slice(0,3)} ${str.slice(3,6)}-${str.slice(6,10)})`
// })
// console.log(formatedPhoneNumber);




// const matrix = [
//     [1, 2],
//     [3, 4]
//   ];

// // const squaredMatrix = matrix.map(row => row.map(num => num ** 2));
// const squaredMatrix = matrix.map(row => row.map(num => num ** 2));
// console.log(squaredMatrix);

  // Output: [[1, 4], [9, 16]]
  // const matrix = [
  //   [1, 2],
  //   [3, 4]
  // ];
  // const squaredMatrix = matrix.map(row => row.map(num => num ** 2));
  
  // // Use console.log to print the actual array elements
  // console.log(JSON.stringify(squaredMatrix)); 
  // // Output: [[1, 4], [9, 16]]


//   const fullNames = ['Alice Johnson', 'Bob Smith', 'Charlie Brown'];

// const namesArray = fullNames.map(name => {
//   const splitName = name.split(" ")
//   const firstName = splitName[0];
//   const lastName =  splitName[1];
//   const nameObj = {firstName, lastName};
//   return nameObj;
// } )
// console.log(JSON.stringify(namesArray));



//   const fullNames = ['Alice Johnson', 'Bob Smith', 'Charlie Brown'];

// const namesArray = fullNames.map(name => {
//   const [firstName, lastName] = name.split(' ');

//   return { firstName, lastName };
// } )
// console.log(JSON.stringify(namesArray));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const evenArr = arr.filter(num => num % 2 === 0);
// console.log(evenArr);

// const arr = [5, 10, 15, 20, 25, 30];
// const greaterThanTen = arr.filter(num => num > 10);
// console.log(greaterThanTen);

// const arr = ['apple', 'banana', 'grape', 'orange', 'pineapple'];
// const strWithApple = arr.filter(str => str.includes("apple"));
// console.log(strWithApple);


// const people = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Alex', age: 18 },
//   { name: 'Tom', age: 35 }
// ];
// const oldPeople = people.filter(person => person.age >= 30);
// // console.log(JSON.stringify(oldPeople));
// const arr = [-10, 20, -30, 40, -50];
// const positiveNum = arr.filter(num => num > 0);
// console.log(positiveNum);
// const students = [
//   { name: 'Alice', grade: 90 },
//   { name: 'Bob', grade: 75 },
//   { name: 'Charlie', grade: 85 },
//   { name: 'David', grade: 60 }
// ];
// const highAchievers = students.filter(student => student.grade > 80);
// console.log(JSON.stringify(highAchievers));


// const products = [
//   { name: 'Laptop', inStock: true },
//   { name: 'Headphones', inStock: false },
//   { name: 'Keyboard', inStock: true },
//   { name: 'Monitor', inStock: false }
// ];
// const availableItems = products.filter(item => item.inStock === true);
// // console.log(JSON.stringify(availableItems));



// // const arr = ['apple', '', 'banana', '', 'cherry'];
// // const fruitsOnly = arr.filter(str => str.length > 1);
// // console.log(fruitsOnly);

// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const numDivisibleBy3 = arr.filter(num => num % 3 === 0);
// // console.log(numDivisibleBy3);


// // const books = [
// //   { title: 'Book A', genre: 'Fiction' },
// //   { title: 'Book B', genre: 'Non-fiction' },
// //   { title: 'Book C', genre: 'Fiction' },
// //   { title: 'Book D', genre: 'Sci-Fi' }
// // ];
// // const fictionGenre = books.filter(obj => obj.genre === "Fiction");
// // console.log(JSON.stringify(fictionGenre));


// // const employees = { name: 'Alice', department: 'HR' }
// // const {department} = employees;
// // console.log(department);


// // const prices = [10, 20, 30];
// // const total = prices.reduce((sum,price) => sum + price, 0)
// // console.log(total);
// // const countAnimals = (arr) => {
// //   const count = arr.reduce((acc,curr) => {
// //     acc[curr] = (acc[curr] )
// //   },{})
// // }


// // try {
// //   arr = ['green', 'yellow'];
// //   console.log(arr[red]);
// // }  catch(ReferenceError) {
// //   console.log('red is defined');
// // }

// // const myText = "I am a string";
// // const newString = myText.replace("a ", " sausage");
// // console.log(newString);
// // // the replace() string function takes a source string,
// // // and a target string and replaces the source string,
// // // with the target string, and returns the newly formed string

// // const myArray = ["I", "love", "chocolate", "frogs"];
// // const madeAString = myArray.join("");
// // console.log(madeAString);
// // // the join() function takes an array, joins
// // // all the array items together into a single
// // // string, and returns this new string


// // const myNumber = int(Math.random());
// // // the random() function generates a random number between
// // // 0 and up to but not including 1, and returns that number
// // console.log(myNumber);


// // const btn = document.querySelector("#textBox")

// // function changeTextContent(){
// //   btn.textContent = "hello"
// // }


// // btn.addEventListener("click",changeTextContent)



//   // const btn = document.getElementById("textBox")

//   // btn.addEventListener("click", (function () {
//   //   btn.textContent = "world"
//   // }) ); // Add event listener to the button



//   function createParagraph() {
//     const para = document.createElement("p");
//     para.textContent = "You clicked the button!";
//     document.body.appendChild(para);
//   }
  
//   const buttons = document.querySelectorAll("button");
  
//   for (const button of buttons) {
//     button.addEventListener("click", createParagraph);
//   }
  


// const body = document.body;

// const panel = document.createElement("div");
// panel.setAttribute("class", "msgBox");
// body.appendChild(panel);

// const msg = document.createElement("p");
// msg.textContent = "This is a message box";
// panel.appendChild(msg);

// const closeBtn = document.createElement("button");
// closeBtn.textContent = "x";
// panel.appendChild(closeBtn);

// closeBtn.addEventListener("click", () =>
//   panel.parentNode.removeChild(panel),
// );


// const person = {
//   name: "Alice", // Key: 'name', Value: 'Alice'
//   age: 25,       // Key: 'age', Value: 25
//   isStudent: true // Key: 'isStudent', Value: true
// };

// person.name = "basas";
// person.city = "lahore";
// delete person.age;



// // for (let key in person) {
// //   console.log(key, person[key]); 
// //   // Output: name Alice, age 26, city New York
// // }

// const book = {
//   title: "eloquent javascript",
//   author: "james smith",
//   year: "2013",
//   genre: "educational",
//   getSummary,
// }



// function getSummary() { 
//   return console.log(`"${this.title} (${this.year}) is a ${this.genre} book by ${this.author}."`);
// }
  

// const book2 = {
//   title:"how to play cover drive",
//   author:"babar azam",
//   year:"2019",
//   genre:"sports",
//   getSummary,
  
// }
// console.log(book2.getSummary());
// console.log(book.getSummary());

// class Book {
//   constructor(title,author,year,genre) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.genre = genre;
//   }
//   getSummary() {
//     return `"${this.title} (${this.year}) is a ${this.genre} book by ${this.author}."`;
//   }
// }

// book1 = new Book("eat that frog","harey","2019","productivity")
// console.log(book1.getSummary());

// book2 = new Book("pokemon","boston","1998","entermainment")
// console.log(book2.getSummary());


// const jsonData = '{"name": "John Doe", "age": 30, "isStudent": false}';
// const obj = JSON.parse(jsonData);
// console.log(obj.age);


// const person = {
//   name: "Jane Smith",
//   age: 25,
//   hobbies: ["reading", "hiking"],
// };
// const jsonString = JSON.stringify(person); // Convert JS object to JSON string
// console.log(jsonString);
// // Output: {"name":"Jane Smith","age":25,"hobbies":["reading","hiking"]}


// const studentData = '{"name": "Ali", "marks": [78, 85, 92], "class": "10A"}';
// const obj = JSON.parse(studentData);
// let sum = 0;
// for(key in obj) {
//   if(key === "marks") {
//     const arrLen = obj[key].length;
//     for(mark of obj[key]) {
//       sum += mark;
      
//     }
//   const avg = sum/arrLen
//   console.log(avg);
//   }
// }

// const studentData = '{"name": "Ali", "age": 18, "class": "10A"}';
// const obj = JSON.parse(studentData);

// console.log(obj.name,obj.class);

// const student = {
//   name: "Ali",
//   age: 18,
//   class: "10A"
// };
// const jsonString = JSON.stringify(student);
// console.log(jsonString);

// const jsonString = '{"student": {"name": "Ali", "class": "10A", "marks": 85}}'
// const obj = JSON.parse(jsonString)
// console.log(obj.student.name);
// console.log(obj.student.class);

// const jsonString = '{"name": "Ali", "age": 18}'
// const obj = JSON.parse(jsonString)
// obj.class = "10A"
// console.log(obj);

// const jsonString = '{"marks": [78, 85, 92]}'
// const obj = JSON.parse(jsonString)
// let sum = 0
// for(let mark of obj.marks) {
//   sum += mark
// }
// // console.log(sum);


// const jsonString = '{"marks": [65, 75, 80, 90]}'
// const obj = JSON.parse(jsonString)
// let sum = 0
// const arrLen = obj.marks.length
// for(let mark in obj.marks) {
//   sum += mark

// }
// const avg = sum/arrLen
// console.log(avg);

// const jsonString = '{"name": "Ali", "age": 18, "class": "10A"}'
// const obj = JSON.parse(jsonString)
// obj.school = "high school"
// obj.age = 19
// console.log(obj);

// const student = {
//   name: "Ali",
//   age: 19,
//   class: "10A",
//   school: "High School"
// };
// const jsonString = JSON.stringify(student)
// console.log(jsonString);

// const jsonString = '{"name": "Ali", "age": 18, "class": "10A"}'
// const obj = JSON.parse(jsonString)
// function ageKey() {
//   if(obj.age) {
//     console.log('found');
//   }
// }
// ageKey()



// const jsonString = '{"student": {"name": "Ali", "class": "10A", "marks": {"math": 85, "science": 92}}}'
// const obj = JSON.parse(jsonString)
// console.log(obj.student.name);
// console.log(obj.student.marks.math);
// console.log(obj.student.marks.science);



// const jsonString1 = '{"student": {"name": "Ali", "age": 18, "class": "10A"}}'
// const jsonString2 = '{"marks": {"math": 85, "science": 92}}'

// const obj1 = JSON.parse(jsonString1)
// const obj2 = JSON.parse(jsonString2)

// const mergeObj = Object.assign({},obj1,obj2)
// console.log(mergeObj);

// const mergeObj = {
//   ...obj1,...obj2
// }
// console.log(mergeObj);
// const jsonString = '{"products": [{"id": 1, "name": "Laptop", "price": 900}, {"id": 2, "name": "Phone", "price": 500}, {"id": 3, "name": "Tablet", "price": 300}]}'
// const obj = JSON.parse(jsonString)
// function filterProduct() {
//   // const filteredProduct = obj.products.filter((product) => {product.price > 500})
//   // return filteredProduct
//   return obj.products.filter((product) => product.price > 400)
// }
// console.log(JSON.stringify(filterProduct()));



const jsonString = '{"students": [{"name": "Ali", "marks": [78, 85, 92]}, {"name": "Sara", "marks": [80, 70, 90]}]}'
const obj = JSON.parse(jsonString)
function updateMarks()