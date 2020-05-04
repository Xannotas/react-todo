import React from 'react'

import { Todo } from '../../types'

import TodoItem from './TodoItem'

type Props = {
  todos: Todo[]
}

const ContentFolder: React.FC<Props> = ({ todos }) => {
  return (
    <div className="content-folder">
      {todos.length > 0 && <div className="content-folder__todos">
        {todos.map(todo => <TodoItem key={todo.id} text={todo.text} id={todo.id} complited={todo.complited} />)}
      </div>}
    </div>
  )
}

export default ContentFolder