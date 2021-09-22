import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// smoke test
it("TodoList renders without crashing", function () {
    render(<TodoList />);
});

// snapshot test
it("TodoList matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new todo", function () {
    const { queryByText, getByPlaceholderText } = render(<TodoList />);

    const input = getByPlaceholderText('To Do');
    const btn = queryByText("Add Todo");

    expect(input).toBeEmpty; // empty select

    fireEvent.change(input, { target: { task: "New Task" } });
    fireEvent.click(btn);
    expect(queryByText(`New Task`)).toBeInTheDocument;
})
