import React, {useState} from 'react';
import { ITodoFolder } from '../../interfaces';

import AddFolderForm from './AddFolderForm';
import TodoFolder from '../TodoFolder';

interface ISidebarProps {
  addNewFolder: any,
  folders: ITodoFolder[]
}

export default function Sidebar({addNewFolder, folders} : ISidebarProps) {
  const [formDisplay, toggleFormDisplay] = useState<boolean>(false)

  const handleFolderShow = () => {
    toggleFormDisplay(true)
  }

  const handleFolderHide = () => {
    toggleFormDisplay(false)
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {folders.map(folder => <TodoFolder key={folder.id} title={folder.title} todos={folder.todos} id={folder.id}/>)}
      </div>
      
      <div className="sidebar__create-folder mt1">
        <button className='btn sidebar__create-folder-btn' onClick={handleFolderShow}><i>+</i> Добавить Папку</button>
        {formDisplay && <AddFolderForm closeFolderForm={handleFolderHide} addNewFolder={addNewFolder}/>}
      </div>
    </aside>
  )
}
