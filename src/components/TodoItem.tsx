import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
}

export default function TodoItem({ todo, onCompletedChange }: TodoItemProps) {
  return (
    <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 hover:bg-gray-200 cursor-pointer">
      <input
        type="checkbox"
        className="scale-125"
        checked={todo.completed}
        onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
      />
      <span className={todo.completed ? "line-through text-gray-400" : ""}>
        {todo.title}
      </span>
    </label>
  )
}