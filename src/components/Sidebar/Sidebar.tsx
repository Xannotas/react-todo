import React, { useState } from 'react';
import { Folder } from '../../types';

import AddFolderForm from './AddFolderForm';
import TodoFolder from './TodoFolder';
import { connect } from 'react-redux';
import { RootState, setFolderId, deleteFolder } from '../../redux/store';

type StateProps = {
  folders: Folder[],
  currentFolderId: number
}
type DispatchProps = {
  setFolderId: (id: number) => void,
  deleteFolder: (id: number) => void
}
type OwnProps = {}

type Props = OwnProps & StateProps & DispatchProps

const Sidebar: React.FC<Props> = ({ setFolderId, folders, currentFolderId, deleteFolder}) => {
  const [formDisplay, toggleFormDisplay] = useState<boolean>(false)

  const showFormFolderCreactor = () => {
    toggleFormDisplay(true)
  }

  const hideFormFolderCreactor = () => {
    toggleFormDisplay(false)
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {folders.map(folder => <TodoFolder key={folder.id} deleteFolder={deleteFolder} title={folder.title} color={folder.color}
          id={folder.id} setFolderId={setFolderId} currentFolderId={currentFolderId} />)}
      </div>

      <div className="sidebar__create-folder mt1">
        <button className='btn sidebar__create-folder-btn' onClick={showFormFolderCreactor}><i>+</i> Добавить Папку</button>
        {formDisplay && <AddFolderForm hideFormFolderCreactor={hideFormFolderCreactor} />}
      </div>
    </aside>
  )
}

const mapState = (state: StateProps) => {
  return {
    folders: state.folders,
    currentFolderId: state.currentFolderId
  }
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapState, { setFolderId, deleteFolder })(Sidebar)