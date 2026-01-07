import { useState } from "react";

interface AddTodoFormProps {
  onSubmit?: (title: string) => void;
}

const AddTodoForm = ({ onSubmit }: AddTodoFormProps) => {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // console.log("Form submitted with value:", inputValue);
    if (inputValue.trim() === '') {
      return; // Do not add empty todos
    }

    if (onSubmit) {
      onSubmit(inputValue.trim());
    }
    setInputValue(''); // Clear input field after submission
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-row justify-end">
      <input
        className='gap-2 border rounded-md p-2 border-gray-400 outline-0 mb-2 w-10/12 mr-4'
        type="text"
        placeholder='What needs to be done?'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className='bg-slate-900 text-white hover:bg-slate-500 rounded-md px-4 mb-2 cursor-pointer'
        // onClick={() => console.log("button clicked")}
      >
        Submit
      </button>
    </form>
  )
}

export default AddTodoForm