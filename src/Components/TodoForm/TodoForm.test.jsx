import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";

test('the textbox works', () => {
  const addTodo = jest.fn();

  render(<TodoForm addTodo={addTodo} />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'new task'} });

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  fireEvent(button, new MouseEvent("click", { bubbles: true }));
  expect(addTodo).toHaveBeenCalledWith('new task');
});
