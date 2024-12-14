// 1.基本型
let email: string = "user@gmail.com";
let age: number = 25;
let isStudent: boolean = true;

// console.log(email, age, isStudent);

let email2 = "user@gmail.com"; // 型推論

email = "user1@gmail.com";
// email = true;
// console.log(email);

// 2.配列
let numbers: number[] = [1, 2, 3, 4];
// console.log(numbers)

// 3.オブジェクト&&関数
interface User {
  id: number;
  name: string;
  email?: string; // オプショナルプロパティ
}

function userInfo(user: User): string {
  const response = `id: ${user.id}, name: ${user.name}, email: ${user.email}`;
  return response;
}

let user = { id: 1, name: "tanaka" };
console.log(userInfo(user));
