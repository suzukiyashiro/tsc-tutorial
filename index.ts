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

// 3.タプル（固定された要素数と型）
let tuple: [string, number] = ["TypeScript", 2024];
// console.log(tuple);

// 4.any型（なるべく避けるべき）
let anything: any = "何でも入る";
// console.log(anything);

anything = 42;
// console.log(anything);

// 5.関数
function logMessage1(message: string): void { // 返り値なし
    console.log(message);
}
logMessage1('メッセージ')

function logMessage2(message: string): string { // 返り値あり
    return `メッセージは「${message}」です`
}
let message = logMessage2('メッセージ')
console.log(message)

// 6.オブジェクト&&関数
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
// console.log(userInfo(user));
