import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Folder } from '../../types'
import { findFolderIdOfState } from '../../utils/helpers'
import { RootState, actions } from '../../redux/store'

import ContentFolder from './ContentFolder'
import AddTodoForm from './AddTodoForm'

type OwnProps = {}
type StateProps = {
  folders: Folder[]
  currentFolderId: number | null
  isShowAllFolders: boolean
}
type DispatchProps = {
  addTodo: (folderId: number, text: string) => void
  setFolderTitle: (folderId: number, folderTitle: string) => void
}
type Props = OwnProps & StateProps & DispatchProps

const Content: React.FC<Props> = ({ addTodo, folders, currentFolderId, isShowAllFolders, setFolderTitle }) => {
  const [todoForm, setTodoForm] = useState<boolean>(false)
  const folderId: number = findFolderIdOfState(folders, currentFolderId!)

  let hasTodos = false

  const showTodoForm = () => {
    setTodoForm(true)
  }

  const hideTodoForm = () => {
    setTodoForm(false)
  }

  return (
    <main className="content">
      {folders.length
        ? <div className="content-folder">
          {isShowAllFolders || folderId < 0
            ? <>
              {
                folders.map(folder => {
                  if (folder.todos.length === 0) return null
                  hasTodos = true
                  return <ContentFolder key={folder.id}
                    todos={folder.todos}
                    color={folder.color}
                    title={folder.title}
                    folderId={folder.id}
                    setFolderTitle={setFolderTitle} />
                })
              }
              {!hasTodos &&
                <p className='content__empty'>Задачи отсутствуют</p>
              }
            </>
            : <>
              <ContentFolder todos={folders[folderId].todos}
                color={folders[folderId].color}
                title={folders[folderId].title}
                folderId={folders[folderId].id}
                setFolderTitle={setFolderTitle} />

              {todoForm
                ? <AddTodoForm hideTodoForm={hideTodoForm} addTodo={addTodo} folderId={folderId} />
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

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapState, { addTodo: actions.addTodo, setFolderTitle: actions.setFolderTitle })(Content)