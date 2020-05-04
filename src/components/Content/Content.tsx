import React, { useState } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { Folder } from '../../types'

import { RootState, addTodo } from '../../redux/store'
import ContentFolder from './ContentFolder'
import AddTodoForm from './AddTodoForm'

type OwnProps = {}
type StateProps = {
  folders: Folder[]
  currentFolderId: number
}
type DispatchProps = {
  addTodo: (text: string) => void
}
type Props = OwnProps & StateProps & DispatchProps

const Content: React.FC<Props> = ({ addTodo, folders, currentFolderId}) => {
  const [todoForm, setTodoForm] = useState<boolean>(false)
  const currentFolder = folders[currentFolderId]

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
          <h3 className={classNames('content-folder__title', `color-${currentFolder.color}`)}>{currentFolder.title}</h3>
          <ContentFolder todos={currentFolder.todos}/>
          {todoForm
            ? <AddTodoForm
              hideTodoForm={hideTodoForm}
              addTodo={addTodo}
            />
            : <button className="btn content-folder__add-btn" onClick={showTodoForm}><i>+</i>Новая задача</button>
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
    currentFolderId: state.currentFolderId
  }
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapState, { addTodo })(Content)