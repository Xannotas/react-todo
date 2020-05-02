import React from 'react'
import classNames from 'classnames'

interface ITodoFolderProps {
  title: string,
  color: string,
  id: number,
  folderId: number,
  setFolderId: any
}



export default function TodoFolder({title, color, id, folderId, setFolderId} : ITodoFolderProps) {
  const handleFolderClick = (event : React.MouseEvent) => {
    setFolderId(id)
  }
  return (
    <div className={classNames('sidebar-content__item', {'active' : folderId === id})}
      onClick={handleFolderClick}>
      <i className={classNames('sidebar-content__item-color', `color-${color}`)}></i>
      <span className='sidebar-content__item-title'>{title}</span>
    </div>
  )
}
