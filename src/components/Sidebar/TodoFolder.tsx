import React from 'react'
import classNames from 'classnames'

type Props = {
  title: string,
  color: string,
  id: number,
  currentFolderId: number,
  setFolderId: (id: number) => void
}

const TodoFolder:React.FC<Props> = ({ title, color, id, currentFolderId, setFolderId }) => {
  const handleFolderClick = () => {
    setFolderId(id)
  }

  return (
    <div className={classNames('sidebar-content__item', { 'active': currentFolderId === id })}
      onClick={handleFolderClick}>
      <i className={classNames('sidebar-content__item-color', `color-${color}`)}></i>
      <span className='sidebar-content__item-title'>{title}</span>
    </div>
  )
}

export default TodoFolder