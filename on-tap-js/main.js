// default parameter
// const sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(10,20));

// const sum = (a, b) => {
//     a = a || 0;
//     b = b || 0;
//     return a + b;
// }
// console.log(sum(10));


// es6

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2]

// console.log(...arr1);
// console.log(...arr2);
// console.log(arr3);

// let infoUser = {
//     fullName: "Nguyen Van Son",
//     email: "son@gmail.com"
// };
// let infoUpdate = {
//     phone: 122323,
//     age: 18
// };
// let infoFinal = {
//     ...infoUser,
//     ...infoUpdate
// }
// console.log(infoUser);
// console.log(infoUpdate);
// console.log(infoFinal);

// const sum = (...num) => {
//     console.log(num);
//     const result = num.reduce((total, item) => {
//         return total + item;
//     }, 0);
//     return result;
// };

// console.log(sum(10, 20, 30, 40, 50, 60));

// destructuring

let infoUser = {
    fullName: "Sonn",
    email: "sn377885@gmail.com"
};

// console.log(infoUser.fullName);
// console.log(infoUser.fullName);
// console.log(infoUser.fullName);
// console.log(infoUser.fullName);
// console.log(infoUser.fullName);

const { fullName, email } = infoUser;
console.log(fullName);
console.log(fullName);
console.log(fullName);
console.log(email);
console.log(email);
console.log(email);


