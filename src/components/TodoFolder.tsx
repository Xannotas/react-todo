import React from 'react'
import classNames from 'classnames'
import { ITodoFolder } from '../interfaces'

export default function TodoFolder({title, color} : ITodoFolder) {

  return (
    <div className='sidebar-content__item'>
      <i className={classNames('sidebar-content__item-color', `color-${color}`)}></i>
      <span className='sidebar-content__item-title'>{title}</span>
    </div>
  )
}
