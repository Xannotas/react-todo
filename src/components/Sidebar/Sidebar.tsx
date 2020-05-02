import React, {useState} from 'react';
import { ITodoFolder } from '../../interfaces';

import AddFolderForm from './AddFolderForm';
import TodoFolder from '../TodoFolder';

interface ISidebarProps {
  addNewFolder: any,
  setFolderId: any,
  folders: ITodoFolder[],
  folderId: number
}

export default function Sidebar({addNewFolder, setFolderId, folders, folderId} : ISidebarProps) {
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
        {folders.map(folder => <TodoFolder  key={folder.id} title={folder.title} color={folder.color} 
                                  id={folder.id} setFolderId={setFolderId} folderId={folderId}/>)}
      </div>
      
      <div className="sidebar__create-folder mt1">
        <button className='btn sidebar__create-folder-btn' onClick={handleFolderShow}><i>+</i> Добавить Папку</button>
        {formDisplay && <AddFolderForm closeFolderForm={handleFolderHide} addNewFolder={addNewFolder}/>}
      </div>
    </aside>
  )
}
