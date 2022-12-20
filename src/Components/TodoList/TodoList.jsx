import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ todoList, removeFromList }) {
  return (
    <div className="d-grid gap-3">
      <ul className="list-group">
        {todoList.map((item) => (
          <TodoItem item={item} removeFromList={removeFromList} />
        ))}
      </ul>
    </div>
  );
}
