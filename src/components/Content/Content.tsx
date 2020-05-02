import React from 'react'
import classNames from 'classnames'
import {Todo} from '../../types'

interface IContentProps {
  title: string,
  todos: Todo[],
  color?: string
}

export default function Content({title, todos, color} : IContentProps) {
  
  return (
    <main className="content">
      <h3 className={classNames('content-title', `color-${color}`)}>{title}</h3>
      <hr/>

      {todos.length > 0 && <div className="content-folders">
         <ul>
          {todos.map(todo => <li>{todo.text}</li>)}
        </ul>
      </div>}

      <button className="btn content-add-btn"><i>+</i>Новая задача</button>
    </main>
  )
}
