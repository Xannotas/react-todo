import React from 'react'
import { Todo } from '../../types'

interface ITodoItemProps {
  todo: Todo
}
export default function TodoItem({todo} : ITodoItemProps) {
  return (
    <div className='todo-item'>
      <label className='todo-item__checkbox'>
        <input type="checkbox"/>
        <span className='todo-item__text'>{todo.text}</span>
      </label>

      <span className='todo-item__remove'>&times;</span>
    </div>
  )
}
