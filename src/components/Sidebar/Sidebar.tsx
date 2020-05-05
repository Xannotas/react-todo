import React, { useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames'

import { Folder } from '../../types';
import { RootState } from '../../redux/store';
import { setFolderId, deleteFolder, showAllFolders } from '../../redux/actions';

import listSvg from '../../assets/icons/list.svg';
import AddFolderForm from './AddFolderForm';
import TodoFolder from './TodoFolder';

type StateProps = {
  folders: Folder[],
  currentFolderId: number | null,
  isShowAllFolders: boolean
}
type DispatchProps = {
  setFolderId: (id: number) => void,
  deleteFolder: (folderId: number) => void,
  showAllFolders: () => void
}
type OwnProps = {}

type Props = OwnProps & StateProps & DispatchProps

const Sidebar: React.FC<Props> = ({ setFolderId, folders, currentFolderId, deleteFolder, showAllFolders, isShowAllFolders }) => {
  const [formDisplay, toggleFormDisplay] = useState<boolean>(false)

  const showFormFolderCreactor = () => {
    toggleFormDisplay(true)
  }

  const hideFormFolderCreactor = () => {
    toggleFormDisplay(false)
  }

  const hideFormShowAllFolders = () => {
    showAllFolders()
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {folders.length > 1 &&
          <div className={classNames('sidebar-content__item', 'sidebar-content__item-all-todos', { 'active': isShowAllFolders })} onClick={hideFormShowAllFolders}>
            <i className={'sidebar-content__item-img'}> <img src={listSvg} alt="list" /> </i>
            <span className='sidebar-content__item-title'>Все задачи</span>
          </div>
        }

        {folders.map(folder => <TodoFolder key={folder.id} deleteFolder={deleteFolder} title={folder.title} color={folder.color}
          id={folder.id} setFolderId={setFolderId} currentFolderId={currentFolderId} isShowAllFolders={isShowAllFolders} />)}
      </div>

      <div className="sidebar__create-folder">
        <button className='btn sidebar__create-folder-btn' onClick={showFormFolderCreactor}><i>+</i> Добавить Папку</button>
        {formDisplay && <AddFolderForm hideFormFolderCreactor={hideFormFolderCreactor} />}
      </div>
    </aside>
  )
}

const mapState = (state: StateProps) => {
  return {
    folders: state.folders,
    currentFolderId: state.currentFolderId,
    isShowAllFolders: state.isShowAllFolders
  }
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapState, { setFolderId, deleteFolder, showAllFolders })(Sidebar)