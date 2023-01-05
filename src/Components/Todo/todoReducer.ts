import IAction from "../../Models/IAction";
import ITodo from "../../Models/ITodo";
import TodoAction from "../../Common/todoAction";

export default function todoReducer(todos: ITodo[], action: IAction) {
  switch (action.type) {
    case TodoAction.init:
      return initTodo(action.payload as ITodo[]);
    case TodoAction.create:
      return createTodo(action.payload as string, todos);
    case TodoAction.edit:
      return editTodo(action.payload as ITodo, todos);
    case TodoAction.remove:
      return removeTodo(action.payload as number, todos);
    default:
      return todos;
  }
}

// Privates Functions

function initTodo(todos: ITodo[]): ITodo[] {
  console.log('initial data');
  return todos;
}

function createTodo(text: string, list: ITodo[]): ITodo[] {
  console.log(`${text} added`);
  return [...list, { id: lastId(list), title: text }];
}

function editTodo(todo: ITodo, todos: ITodo[]): ITodo[] {
  console.log(`updated to: ${todo.title}`);
  return todos.map((item) => {
    if (item.id === todo.id) {
      return { ...item, title: todo.title };
    } else return item;
  });
}

function removeTodo(id: number, todos: ITodo[]) {
  console.log(`id:${id} deleted`);
  return todos.filter((i) => i.id !== id);
}

const lastId = (list: ITodo[]): number =>
  list.length === 0 ? 1 : list[list.length - 1].id + 1;
