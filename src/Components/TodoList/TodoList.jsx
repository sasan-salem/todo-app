import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({list: todoList}){
    return(
        <div className="d-grid gap-3">
            <ul className="list-group">
                {todoList.map(item =><TodoItem item={item}/>)}
            </ul>
        </div>
    );
}