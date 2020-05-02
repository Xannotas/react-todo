import React from 'react'
import { ITodoFolder } from '../interfaces'

export default function TodoFolder({title, color} : ITodoFolder) {

  return (
    <div className='sidebar-content__item'>
      <div className='sidebar-content__item-colors'>

      </div>
      <div className='sidebar-content__item-title'>{title}</div>
    </div>
  )
}
