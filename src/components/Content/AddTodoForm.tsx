import React, { useState } from 'react'

type Props = {
  folderId: number,
  hideTodoForm: () => void,
  addTodo: (folderId: number, text: string) => void
}
const AddTodoForm: React.FC<Props> = ({ hideTodoForm, addTodo, folderId }) => {

  const [todoValue, setTodoValue] = useState<string>('')

  const handleAddNewTodo = () => {
    if (todoValue.length) {
      addTodo(folderId, todoValue)
      setTodoValue('')
    }
  }

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.currentTarget.value)
  }

  return (
    <div className='content-todo-form'>
      <input className='input' value={todoValue} autoFocus onChange={onValueChange} placeholder='Текст задачи' />
      <button className='btn btn-submit' onClick={handleAddNewTodo}>Добавить Задачу</button>
      <button className='btn btn-cancel' onClick={hideTodoForm}>Отменить</button>
    </div>
  )
}

export default AddTodoForm