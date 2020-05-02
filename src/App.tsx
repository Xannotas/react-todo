import React, {useState} from 'react';
import { ITodoFolder } from './interfaces';
import { Todo } from './types';

import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content'

import './styles/style.scss';

function App() {
  const [folders, setFolders] = useState<ITodoFolder[]>([])
  const [folderId, setFolderId] = useState<number>(0)

  const addNewFolder = (title: string, color: string) => {
    if(title.length > 0) {
      const folder = {
        id: folders.length ? folders[folders.length-1].id + 1 : 0,
        color,
        title,
        todos: []
      }
      
      setFolders(prev => [...prev, folder])
    }
  }

  const addNewTodo = (text: string) => {
    setFolders(prev => {
      let newTodo : Todo = {
        id: prev[folderId].todos.length,
        text,
        complited: false
      }
      // MUTABLE
      prev[folderId].todos.push(newTodo) // NEED REFACTOR

      return [...prev]
    })
  }
  
  return (
    <div className='app'>
      <Sidebar folders={folders} addNewFolder={addNewFolder} folderId={folderId} setFolderId={setFolderId}/>
      
      { folders.length
        ? <Content folders={folders} folderId={folderId} onAddNewTodo={addNewTodo}/>
        : <p className='content__empty'>Задачи отсутствуют</p>
      }
    </div>
  );
}

export default App;
