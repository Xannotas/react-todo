import React from 'react'
import classNames from 'classnames'

type Props = {
  id: number,
  title: string,
  color: string,
  isShowAllFolders: boolean,
  currentFolderId: number | null,
  setFolderId: (folderId: number) => void,
  deleteFolder: (folderId: number) => void
}

const TodoFolder: React.FC<Props> = ({ title, color, id, currentFolderId, setFolderId, deleteFolder, isShowAllFolders }) => {
  const handleFolderClick = () => {
    if (id !== currentFolderId) setFolderId(id)
  }

  const handlerFolderRemove = () => {
    deleteFolder(id)
  }

  return (
    <div className={'sidebar-content__item-wrapper'}>
      <div className={classNames('sidebar-content__item', { 'active': currentFolderId === id && !isShowAllFolders})} onClick={handleFolderClick}>
        <i className={classNames('sidebar-content__item-color', `color-${color}`)}></i>
        <span className='sidebar-content__item-title'>{title}</span>
      </div>
      <button className='btn btn-remove d-none' onClick={handlerFolderRemove}>&times;</button> 
    </div>
  )
}

export default TodoFolder