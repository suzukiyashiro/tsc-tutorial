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
// let numbers: number[] = [1, 2, 3, 4];
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
function logMessage1(message: string): void {
  // 返り値なし
  console.log(message);
}
// logMessage1('メッセージ')

function logMessage2(message: string): string {
  // 返り値あり
  return `メッセージは「${message}」です`;
}
let message = logMessage2("メッセージ");
// console.log(message)

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

// let user = { id: 1, name: "tanaka" };
// console.log(userInfo(user));

// 7.interfaceとtypeの違い
// interfaceの定義
interface Person {
  name: string;
  age: number;
}

// typeエイリアスの定義
type Animal = {
  name: string;
  species: string;
};

// 拡張
interface Employee extends Person {
  position: string;
}

// 実際の使用例
const developer: Employee = {
  name: "Alice",
  age: 30,
  position: "Frontend Developer",
};

type Tiger = Animal & { habitat: string };
const tiger: Tiger = {
  name: "Tiger",
  species: "Big Cat",
  habitat: "Wildlife",
};

// ユニオン型の定義
type ID = string | number; // IDは文字列または数値が許容される

// 実際の使用例
function printID(id: ID): void {
  if (typeof id === "string") {
    console.log(`文字列のID: ${id.toUpperCase()}`); // 文字列の場合
  } else {
    console.log(`数値のID: ${id * 2}`); // 数値の場合
  }
}

// 使用例
// printID("abc123"); // "文字列のID: ABC123"
// printID(42); // "数値のID: 84"

// タプル型の定義
type Point = [number, number]; // 2次元座標 (x, y)
type UserInfo = [string, number, boolean]; // ユーザー情報 [名前, 年齢, ログイン状態]

// 実際の使用例
const coordinates: Point = [10, 20]; // 正しい
// const invalidCoordinates: Point = [10, "20"]; // エラー: string型は使えない

const user: UserInfo = ["Alice", 25, true]; // ユーザー情報

// タプル型の要素へのアクセス
const [x, y] = coordinates; // 分割代入で使いやすい
// console.log(`X座標: ${x}, Y座標: ${y}`);

// 要素の変更
coordinates[0] = 50; // タプル内の要素は型が一致すれば変更可能
// console.log(coordinates); // [50, 20]


// 8.ジェネリクスの関数
function identity<Type>(arg: Type): Type {
  return arg;
}

const number = identity<number>(42); // 型推論: Type = number
const text = identity<string>("Hello"); // 型推論: Type = string


// ジェネリクスを使用した関数
// filterArrayは、配列(arr)とコールバック関数(callback)を受け取り、
// 条件を満たす要素だけをフィルタリングして新しい配列を返します。
// <T>はジェネリクスで、配列の要素の型が呼び出し時に動的に決まります。
function filterArray<T>(arr: T[], callback: (item: T) => boolean): T[] {
    // 配列のfilterメソッドを使用して条件に合う要素だけを返します
    return arr.filter(callback);
}

// 使用例
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = filterArray(numbers, (num) => num > 2); // [3, 4, 5]
console.log(filteredNumbers);

const strings = ["apple", "banana", "cherry"];
const filteredStrings = filterArray(strings, (str) => str.startsWith("b")); // ["banana"]
// console.log(filteredStrings);



// ジェネリクスを使用したクラス
// DataManagerは汎用的なデータ管理を行うクラスです。
// <T>はジェネリクスで、格納するデータの型を呼び出し時に指定できます。
class DataManager<T> {
    // 内部で管理するデータを格納する配列
    private data: T[] = [];

    // 配列に新しいアイテムを追加するメソッド
    add(item: T): void {
        this.data.push(item);
    }

    // 配列内のすべてのアイテムを返すメソッド
    getAll(): T[] {
        return this.data;
    }
}

// 使用例: 数値を管理する場合
const numberManager = new DataManager<number>();
numberManager.add(10);
numberManager.add(20);
// console.log(numberManager.getAll()); // [10, 20]

// 使用例: 文字列を管理する場合
const stringManager = new DataManager<string>();
stringManager.add("apple");
stringManager.add("banana");
// console.log(stringManager.getAll()); // ["apple", "banana"]

// 使用例: オブジェクトを管理する場合
interface User {
    id: number;
    name: string;
}

const userManager = new DataManager<User>();
userManager.add({ id: 1, name: "Alice" });
userManager.add({ id: 2, name: "Bob" });
// console.log(userManager.getAll()); // [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]

