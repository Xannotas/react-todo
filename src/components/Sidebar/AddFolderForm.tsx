import React, { useState } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { RootState, addFolder } from './../../redux/store'

import colorList from './../../assets/colorList.json'

type StateProps = {}
type DispatchProps = {
  addFolder: (text: string, color: string) => void
}
type OwnProps = {
  hideFormFolderCreactor: () => void;
}
type Props = StateProps & DispatchProps & OwnProps

const AddFolderForm: React.FC<Props> = ({ hideFormFolderCreactor, addFolder }) => {
  const maxTitleLenght: number = 30
  const [inputValue, setInputValue] = useState<string>('')
  const [colorId, setColorId] = useState<number>(0)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)
  }

  const handleSubmit = () => {
    _addFolder()
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      _addFolder()
    }
  }

  const _addFolder = () => {
    if (inputValue.length && inputValue.length < maxTitleLenght) {
      addFolder(inputValue, colorList.colors[colorId])
      setInputValue('')
      hideFormFolderCreactor()
    }
  }

  const handleChangeColor = (id: number = 0) => () => {
    setColorId(id)
  }

  return (
    <div className='sidebar__create-folder-form'>
      <button className='btn btn-close' onClick={hideFormFolderCreactor}>&times;</button>
      <input className='input' value={inputValue} autoFocus placeholder='Название папки'
        onChange={handleInput} onKeyDown={handleKeyDown}
      />

      <div className='sidebar-colors'>
        {colorList.colors.map((color, index) => {
          return <button key={color} onClick={handleChangeColor(index)}
            className={classNames('sidebar-colors__item', 'color-' + color, { 'active': colorId === index })}></button>
        })}
      </div>

      <button className='btn btn-submit w100' onClick={handleSubmit}>Добавить</button>
    </div>
  )
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>
  (null, { addFolder })(AddFolderForm)