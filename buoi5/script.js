// const arrs = ["a", "b", "c", "d", "e"];
// let text = "";
// for (let i = 0; i < arrs.length; i++) {
//   //   console.log("Vị trí thứ ", i, " là ", arrs[i]); // arr[0]
//   text += arrs[i] + "<br />"; // text = text + i === text += i
// }

// document.getElementsByClassName("card").innerHTML = text;

// const arr = ["Item1", "Item2", "Item3", "Item4", "Item5"];
// const cardContainer = document.getElementById("card-container");
// // contaiener
// // card
// //card -item

// for (let i = 0; i < arr.length; i++) {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   const cardItem = document.createElement("div");
//   cardItem.classList.add("card-item");
//   cardItem.textContent = arr[i];

//   card.appendChild(cardItem);

//   cardContainer.appendChild(card);
// }

// className va classList
// className
// card.className = "card card-item card-item_content"
// card.className += "card-item";

// classList
// const element = document.querySelector(".example");
// // theem lop
// element.classList.add("new-example"); // .new-example
// // xóa lớp
// element.classList.remove("new-example");

// if (element.classList.contains("new-example")) {
//   console.log("Element có lớp new-example");
// }
// tag giảm giá, yêu thích

// for of

const person = { name: "Thùy Hương", age: 20 };
person.location = "Ha noi";

// person.name =
// person.age
// person.location

// let textHtml = "";
// for (let x in person) {
//   console.log("Khóa của x là: ", x);
//   textHtml += person[x] + " = ";
// }

// document.getElementById("textHtml").innerHTML = textHtml;

// for in chỉ nên dùng ở trong object thôi ( lấy dc key)
// mảng qtrong là []

// const numbers = [1, 9, 43, 6, 24, 65, 63, 6345, 5];
// let txtHtml = "";
// for (let x in numbers) {
// console.log("x", x);
//   txtHtml += numbers[x] + " = ";
// }
// console.log(txtHtml);
// document.getElementById("textHtml").innerHTML = textHtml;

// for of

const arrs = ["a", "b", "c", "d", "e", "f", "g", "a", "e"];
let textHtml = "";
// for (let e of arrs) {
//   textHtml += e + " = ";
// }

// document.getElementById("textHtml").innerHTML = textHtml;

// while

// while (arrs[i]) {
//   textHtml += arrs[i] + " = ";
//   i++;
// }
// const arrNew = new Set(arrs);
// arrNew.add("h");
// console.log(arrNew.size); // arr.length
// console.log(arrNew);
// console.log(arrNew.has("b"));

// arrNew.forEach(function (arr) {
//   textHtml += arr + " = ";
// });
// 1 ngày // 3 ca làm việc // 1 ca đi kiểm tra 1000 vị trí // 3000 điểm cần for()
// ví trị a của ca 1 là: oke 1000 < x < 3000

//ví trị a của ca 2 là: oke
//ví trị a của ca 3 là: no oke
// const letters = new Set(["a", "b", "c", "d", "e"]);
// const newLetters = letters.entries();
// console.log(newLetters);
// console.log(letters, typeof letters);
// set thuật toán // lọc giá trị trùng nhau
// for (let x of newLetters) {
// //   console.log("x", x);
//   textHtml += x + " = ";
// }

// document.getElementById("textHtml").innerHTML = textHtml;

const persons = new Map([
  ["Thùy Hương", 20],
  ["Quang Minh", 21],
]);

// set .add // thêm 1 phần tử vào trong set đó
persons.set("Đức Mạnh", 24);
persons.set(56, 100);
// console.forEach(function (arr) {
//   textHtml += arr + " = ";
// });
// keys | values

for (let x of persons.entries()) {
  textHtml += x + " = ";
}
console.log("textHtml", textHtml);
// let numPerson = persons.get("Quang Minh");
// console.log("persons", typeof persons);
// console.log(numPerson);
