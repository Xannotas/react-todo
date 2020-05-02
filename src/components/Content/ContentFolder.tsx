import React from 'react'
import classNames from 'classnames'
import {Todo} from '../../types'

interface IContentFolderProps {
  title: string,
  todos: Todo[],
  color: string
}

export default function ContentFolder({title, todos, color} : IContentFolderProps){
  return (
    <div className="content-folder">
      <h3 className={classNames('content-folder__title', `color-${color}`)}>{title}</h3>

      {todos.length > 0 && <div className="content-folder__todos">
        <ul>
          {todos.map(todo => <li>{todo.text}</li>)}
        </ul>
      </div>}
    </div>
  )
}
