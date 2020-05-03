import React from 'react'
import { Todo } from '../../types'

interface ITodoItemProps {
  todo: Todo
}
export default function TodoItem({todo} : ITodoItemProps) {
  return (
    <div className='todo-item'>
      <label className='todo-item-content'>
        <input type="checkbox"/>
        <span className="checkbox">
          <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
        </span>
        <span className='todo-item-content__text'>{todo.text}</span>
      </label>

      <span className='todo-item__remove'>&times;</span>
    </div>
  )
}
