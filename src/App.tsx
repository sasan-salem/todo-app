import TodoList from './Components/TodoList/TodoList';
import Header from './Components/Layout/Header';
import TodoForm from './Components/TodoForm/TodoForm';
import UseApp from './useApp'

export default function App() {
  const [todoList, updateTodoList] = UseApp();

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-4">
          <Header />
          <TodoForm todoList={todoList} updateTodoList={updateTodoList}/>
          <TodoList list={todoList}/>
        </div>
      </div>
    </>
  );
}
