import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";
import { TodoContext } from "../../Common/Context";

test("the textbox works", () => {
  const dispatch = jest.fn();

  render(
    <TodoContext.Provider value={dispatch}>
      <TodoForm />
    </TodoContext.Provider>
  );
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "new task" } });

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  fireEvent(button, new MouseEvent("click", { bubbles: true }));
  expect(dispatch).toHaveBeenCalledWith({ payload: "new task", type: 1 });
});
