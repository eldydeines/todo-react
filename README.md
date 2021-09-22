# React-Forms Exercise 2 Todo App

## Testing Requirements
Guidelines for testing:

- Every component needs a smoke + snapshot test.
- Critical Business Logic needs tests too. Use your judgement for this, but make sure you cover core functionality. Examples include: the ability to enter data, submit a form, and have the desired outcome appear in the DOM.

## Todo App - List, Add, Remove Todos
Create a Todo App that allows users to see, add, edit, and remove todos. It should contain the following components.

App - this component should render the TodoList component
TodoList - this component should render the NewTodoForm component and should render the list of Todo components. Place your state that contains all of the todos in this component.
NewTodoForm - this component should render a form with one text input for the task to be created. When this form is submitted, a new Todo component should be created. - Todo- this component should display a div with the task of the todo.
For each Todo component, there should also be a button with the text “X” that when clicked, removes the todo.