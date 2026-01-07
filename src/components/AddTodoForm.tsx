const AddTodoForm = () => {
  return (
    <div className='flex flex-row justify-end'>
      <input
        className='gap-2 border rounded-md p-2 border-gray-400 outline-0 mb-2 w-10/12 mr-4'
        type="text"
        placeholder='What needs to be done?'
      />
      <button
        className='bg-slate-900 text-white hover:bg-slate-500 rounded-md px-4 mb-2 cursor-pointer'
        onClick={() => console.log("button clicked")}
      >
        Submit
      </button>
    </div>
  )
}

export default AddTodoForm