import React from 'react'
import classNames from 'classnames'

type Props = {
  title: string,
  color: string,
  id: number,
  currentFolderId: number,
  setFolderId: (id: number) => void,
  deleteFolder: (id: number) => void
}



const TodoFolder: React.FC<Props> = ({ title, color, id, currentFolderId, setFolderId, deleteFolder }) => {
  const handleFolderClick = () => {
    if (id !== currentFolderId) setFolderId(id)
  }

  const handlerFolderRemove = () => {
    deleteFolder(id)
  }

  return (
    <div className={'sidebar-content__item-wrapper'}>
      <div className={classNames('sidebar-content__item', { 'active': currentFolderId === id })} onClick={handleFolderClick}>
        <i className={classNames('sidebar-content__item-color', `color-${color}`)}></i>
        <span className='sidebar-content__item-title'>{title}</span>
      </div>
      <button className='btn btn-remove d-none' onClick={handlerFolderRemove}>&times;</button>
    </div>
  )
}

export default TodoFolder