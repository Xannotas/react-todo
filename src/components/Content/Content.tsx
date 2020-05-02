import React, {useState} from 'react'
import { ITodoFolder } from '../../interfaces'

import ContentFolder from './ContentFolder'
import AddTodoForm from './AddTodoForm'


interface IContentProps {
  folders: ITodoFolder[],
  folderId: number,
  onAddNewTodo: any
}


export default function Content({ folders, folderId, onAddNewTodo }: IContentProps) {
  const [todoForm, setTodoForm] = useState<boolean>(false)

  const handleTodoFormShow = (event: React.MouseEvent) => {
    setTodoForm(true)
  }

  const handleTodoFormHide = (event: React.MouseEvent) => {
    setTodoForm(false)
  }

  return (
    <main className="content">
      <ContentFolder
        title={folders[folderId].title}
        todos={folders[folderId].todos}
        color={folders[folderId].color}
      />
      {todoForm
        ? <AddTodoForm 
            hideTodoForm={handleTodoFormHide}
            onAddNewTodo={onAddNewTodo}
          />
        : <button className="btn content-folder__add-btn" onClick={handleTodoFormShow}><i>+</i>Новая задача</button>
      }
    </main>
  )
}