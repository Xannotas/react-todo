import React, { useState } from 'react'

type Props = {
  folderId: number,
  hideTodoForm: () => void,
  addTodo: (folderId: number, text: string) => void
}
const AddTodoForm: React.FC<Props> = ({ hideTodoForm, addTodo, folderId }) => {

  const [todoValue, setTodoValue] = useState<string>('')

  const аddNewTodo = () => {
    if (todoValue.length) {
      addTodo(folderId, todoValue)
      setTodoValue('')
    }
  }

  const onSubmit = () => {
    аddNewTodo()
  }
  const onEnterDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      аddNewTodo()
    }
  }

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.currentTarget.value)
  }

  return (
    <div className='content-todo-form'>
      <input className='input' placeholder='Текст задачи' value={todoValue} autoFocus onChange={onValueChange} onKeyDown={onEnterDown} />
      <button className='btn btn-submit' onClick={onSubmit}>Добавить Задачу</button>
      <button className='btn btn-cancel' onClick={hideTodoForm}>Отменить</button>
    </div>
  )
}

export default AddTodoForm