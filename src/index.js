// JavaScriptでは、型が定義されていないため、エラーに気づくのが遅れます。
function userInfo(user) {
    return `name:${user.name}`;
}

const user = { id: 1 }; // 'name' プロパティが欠けている
console.log(userInfo(user)); // 実行して初めてエラーに気づく
