import React, { useState } from 'react'
import Input from '../common/Input'

type Props = {
  folderId: number,
  hideTodoForm: () => void,
  addTodo: (folderId: number, text: string) => void
}
const AddTodoForm: React.FC<Props> = ({ hideTodoForm, addTodo, folderId }) => {
  const maxTodoLenght = 50
  const [todoValue, setTodoValue] = useState<string>('')

  const handleAddTodo = () => {
    if (todoValue.length > 0 && todoValue.length <= maxTodoLenght) {
      addTodo(folderId, todoValue)
      setTodoValue('')
    }
  }

  return (
    <div className='content-todo-form'>
      <Input placeholder='Текст задачи' onSubmit={handleAddTodo} value={todoValue} setValue={setTodoValue} maxLenght={maxTodoLenght} />
      <button className='btn btn-submit' onClick={handleAddTodo}>Добавить Задачу</button>
      <button className='btn btn-cancel' onClick={hideTodoForm}>Отменить</button>
    </div>
  )
}

export default AddTodoForm