import { render, screen } from "@testing-library/react";
import { TodoContext } from "../../Common/Context";
import TodoList from "../TodoList/TodoList";

test("should find the first todo", () => {
  const todos = [
    {
      id: 1,
      title: "test1",
    },
    {
      id: 2,
      title: "test2",
    },
  ];

  const removeTodo = jest.fn();

  render(
    <TodoContext.Provider
      value={{ removeTodo: removeTodo, editTodo: () => {} }}
    >
      <TodoList todos={todos} />
    </TodoContext.Provider>
  );

  expect(screen.getByText("test1")).toBeInTheDocument();
});
