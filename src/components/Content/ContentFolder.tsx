import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import { Todo } from '../../types'
import TodoItem from './TodoItem'
import Input from '../common/Input'

type Props = {
  folderId: number,
  todos: Todo[],
  title: string,
  color: string,
  setFolderTitle: (folderId: number, folderTitle: string) => void
}

const ContentFolder: React.FC<Props> = ({ todos, title, color, folderId, setFolderTitle }) => {
  const maxLenght = 30
  const [titleFormIsOpen, setTitleFormIsOpen] = useState<boolean>(false)
  const [titleValue, setTitleValue] = useState<string>(title)

  const classColor: string = classNames('content-folder__title', `color-${color}`)

  useEffect(() => {
    setTitleValue(title)
  }, [title])

  const handleChangeTitle = () => {
    setTitleFormIsOpen(false)
    if (titleValue !== title) {
      const newTitle = titleValue === '' ? 'Без названия' : titleValue
      setFolderTitle(folderId, newTitle)
    }
  }

  const onTitleClick = () => {
    if (titleValue === 'Без названия') {
      setTitleValue('')
    }
    setTitleFormIsOpen(true)
  }

  return (
    <div className="content-folder">
      {titleFormIsOpen
        ? <Input onBlur={handleChangeTitle} placeholder='Название папки' onSubmit={handleChangeTitle} value={titleValue} setValue={setTitleValue} />

        : <h3 onClick={onTitleClick} className={classColor}>
          <span>{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 383.947 383.947"
            width="20px" height="20px"
            fill="#DFDFDF"
          ><g>
              <polygon points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893" />
              <path
                d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04 C386.027,77.92,386.027,64.373,377.707,56.053z"
              />
            </g>
          </svg>
        </h3>
      }

      <div className="hr"></div>

      {todos.length > 0 && <div className="content-folder__todos">
        {todos.map(todo => <TodoItem key={folderId + '_' + todo.id} folderId={folderId} text={todo.text} todoId={todo.id} complited={todo.complited} />)}
      </div>}
    </div>
  )
}

export default ContentFolder