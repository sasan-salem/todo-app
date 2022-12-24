import { fireEvent, render, screen, within } from "@testing-library/react";
import { TodoContext } from "../../Common/Context";
import TodoItem from "./TodoItem";

const item = {
  id: 1,
  title: "test1",
};

const removeTodo = jest.fn();
const showModal = jest.fn();

test("should have the data", () => {
  render(
    <TodoContext.Provider value={{ removeTodo: removeTodo }}>
      <TodoItem key={1} item={item} showModal={showModal} />
    </TodoContext.Provider>
  );
  expect(screen.getByTestId("todoItem-1")).toBeInTheDocument();
  expect(screen.getByTestId("todoItem-1")).toHaveTextContent("test1");
});

test("delete button", () => {
  render(
    <TodoContext.Provider value={{ removeTodo: removeTodo }}>
      <TodoItem key={1} item={item} showModal={showModal} />
    </TodoContext.Provider>
  );
  const deleteButton = within(screen.getByTestId("todoItem-1")).getAllByRole("button")[1];
  expect(deleteButton).toBeInTheDocument();
  fireEvent(deleteButton, new MouseEvent("click", { bubbles: true }));
  expect(removeTodo).toHaveBeenCalledWith(1);
});

test("edit button", () => {
  render(
    <TodoContext.Provider value={{ removeTodo: removeTodo }}>
      <TodoItem key={1} item={item} showModal={showModal} />
    </TodoContext.Provider>
  );
  const editButton = within(screen.getByTestId("todoItem-1")).getAllByRole("button")[0];
  expect(editButton).toBeInTheDocument();
  fireEvent(editButton, new MouseEvent("click", { bubbles: true }));
  expect(showModal).toHaveBeenCalledWith({ id: 1, title: "test1" });
});
