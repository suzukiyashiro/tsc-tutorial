// TODO型の定義
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// TODOリスト管理クラス
class TodoManager {
    private todos: Todo[] = [];

    addTodo(title: string): void {
        const newTodo: Todo = {
            id: this.todos.length + 1,
            title,
            completed: false,
        };
        this.todos.push(newTodo);
    }

    toggleComplete(id: number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }

    listTodos(): void {
        console.log(this.todos);
    }
}

// 実際に動かす例
const manager = new TodoManager();
manager.listTodos();

manager.addTodo("TypeScriptの勉強");
manager.addTodo("実践アプリを作る");
manager.listTodos();

manager.toggleComplete(1);
manager.listTodos();
