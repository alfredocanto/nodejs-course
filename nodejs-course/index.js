let username = "alfredo";
let age = 30;
let hasHobbies = false;
let points = [10, 20, 30];

let user = {
  name: "ryan",
  lastName: "ryan",
};
const pi = 3.1415;

console.log(username);
console.log(age);
console.log(hasHobbies);
console.log(user);
console.log(points);
console.log(pi);

if (age >= 18) {
  console.log("adult");
} else {
  console.log("child");
}

const names = ["joe", "john", "marco"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

const showUserInfo = (username, userage) => {
  return `Username: ${username}, Age: ${userage}`;
};

console.log(showUserInfo("Alfredo", 23));
