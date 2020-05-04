import React, { useState, ChangeEvent } from 'react'

type Props = {
  hideTodoForm: () => void,
  addTodo: (text: string) => void
}
const AddTodoForm: React.FC<Props> = ({ hideTodoForm, addTodo }) => {

  const [todoValue, setTodoValue] = useState<string>('')

  const handleAddNewTodo = (event: React.MouseEvent) => {
    if (todoValue.length) {
      addTodo(todoValue)
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