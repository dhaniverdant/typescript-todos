import { useState } from "react";
import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean) {
    // alert(
    //   `todo with id ${id} is ${completed ? "completed" : "not completed"}`
    // );
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function addTodo(title: string) {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
    console.log("Adding todo:", newTodo);
  }

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">MY TODOS</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <AddTodoForm onSubmit={addTodo} />
        <div className="space-y-2">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompletedChange={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
