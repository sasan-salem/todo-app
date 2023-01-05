import TodoAction from "../Common/todoAction";
import ITodo from "./ITodo";

export default interface IAction{
    type: TodoAction;
    payload: string | number | ITodo | ITodo[];
}
