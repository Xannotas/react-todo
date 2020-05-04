import React from 'react'
import classNames from 'classnames'

import { Todo } from '../../types'

import TodoItem from './TodoItem'

type Props = {
  folderId: number,
  todos: Todo[],
  title: string,
  color: string
}

const ContentFolder: React.FC<Props> = ({ todos, title, color, folderId }) => {
  return (
    <div className="content-folder">
      <h3 className={classNames('content-folder__title', `color-${color}`)}>{title}</h3>
      {todos.length > 0 && <div className="content-folder__todos">
        {todos.map(todo => <TodoItem key={folderId+'_'+todo.id} folderId={folderId} text={todo.text} todoId={todo.id} complited={todo.complited} />)}
      </div>}
    </div>
  )
}

export default ContentFolder