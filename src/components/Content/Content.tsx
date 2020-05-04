import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Folder } from '../../types'

import { RootState, addTodo } from '../../redux/store'
import ContentFolder from './ContentFolder'
import AddTodoForm from './AddTodoForm'

type OwnProps = {}
type StateProps = {
  folders: Folder[]
  currentFolderId: number
  isShowAllFolders: boolean
}
type DispatchProps = {
  addTodo: (text: string) => void
}
type Props = OwnProps & StateProps & DispatchProps

const Content: React.FC<Props> = ({ addTodo, folders, currentFolderId, isShowAllFolders }) => {
  const [todoForm, setTodoForm] = useState<boolean>(false)
  const currentFolder = currentFolderId >= 0 && folders[currentFolderId]
  const showTodoForm = () => {
    setTodoForm(true)
  }

  const hideTodoForm = () => {
    setTodoForm(false)
  }

  return (
    <main className="content">
      {folders.length && currentFolder
        ? <div className="content-folder">
          {isShowAllFolders
            ? folders.map(folder => {
              if (folder.todos.length === 0) return null
              return <ContentFolder todos={folder.todos} color={folder.color} title={folder.title} folderId={folder.id}/>
            })

            : <>
              <ContentFolder todos={currentFolder.todos} color={currentFolder.color} title={currentFolder.title} folderId={currentFolder.id}/>
              {todoForm
                ? <AddTodoForm hideTodoForm={hideTodoForm} addTodo={addTodo} />
                : <button className="btn content-folder__add-btn" onClick={showTodoForm}><i>+</i>Новая задача</button>
              }
            </>
          }
        </div>
        : <p className='content__empty'>Задачи отсутствуют</p>
      }
    </main>
  )
}
const mapState = (state: StateProps) => {
  return {
    folders: state.folders,
    currentFolderId: state.currentFolderId,
    isShowAllFolders: state.isShowAllFolders
  }
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapState, { addTodo })(Content)