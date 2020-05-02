import React, {useState} from 'react';
import { ITodoFolder } from './interfaces';
import { Todo } from './types';

import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content'

import './styles/style.scss';

function App() {
  const [folders, setFolders] = useState<ITodoFolder[]>([])
  const [folderId, setFolderId] = useState<number>(0)
  //const [currentFolder, setFolder] = useState<ITodoFolder>()

  const addNewFolder = (title: string, color: string) => {
    if(title.length > 0) {
      const folder = {
        id: folders.length ? folders[folders.length-1].id+1 : 0,
        color,
        title,
        todos: []
      }
      
      setFolders(prev => [...prev, folder])
    }
  }
  
  return (
    <div className='app'>
      <Sidebar folders={folders} addNewFolder={addNewFolder}/>
      
      { folders.length
        ? <Content 
            title={folders[folderId].title}
            todos={folders[folderId].todos}
            color={folders[folderId].color}
          />
        : <p className='content__empty'>Задачи отсутствуют</p>
      }
    </div>
  );
}

export default App;
