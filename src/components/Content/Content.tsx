import React from 'react'
import { ITodoFolder } from '../../interfaces'

import ContentFolder from './ContentFolder'


interface IContentProps{
  folders:  ITodoFolder[],
  folderId: number
}

export default function Content({folders, folderId} : IContentProps) {
  
  return (
    <main className="content">
      <ContentFolder 
        title={folders[folderId].title}
        todos={folders[folderId].todos}
        color={folders[folderId].color}
      />
      <button className="btn content-folder__add-btn"><i>+</i>Новая задача</button>
    </main>
  )
}