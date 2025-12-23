import { dummyData } from "./data/todos"

function App() {

  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-3xl text-center">MY TODOS</h1>
      <div>
        <div>
          {dummyData.map(todo => (
            <h4 key={todo.id}>{todo.title}</h4>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
