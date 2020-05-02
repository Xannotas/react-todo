import React, {useState, ChangeEvent} from 'react'

interface IAddTodoFormProps {
  hideTodoForm: any,
  onAddNewTodo: any
}
export default function AddTodoForm({hideTodoForm, onAddNewTodo} : IAddTodoFormProps) {
  
  const [todoValue, setTodoValue] = useState<string>('')

  const handleAddNewTodo = (event: React.MouseEvent) => {
    if(todoValue.length){
      onAddNewTodo(todoValue)
      setTodoValue('')
    }
  }
  
  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.currentTarget.value)
  }

  return (
    <div className='content-todo-form'>
      <input className='input' value={todoValue} autoFocus onChange={onValueChange} placeholder='Текст задачи'/>
      <button className='btn btn-submit' onClick={handleAddNewTodo}>Добавить Задачу</button>
      <button className='btn btn-cancel' onClick={hideTodoForm}>Отменить</button>
    </div>
  )
}
