import React, { useState } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { RootState } from './../../redux/store'
import { addFolder } from './../../redux/actions'

import colorList from './../../assets/colorList.json'
import Input from '../common/Input'

type StateProps = {}
type DispatchProps = {
  addFolder: (text: string, color: string) => void
}
type OwnProps = {
  hideFormFolderCreactor: () => void;
}
type Props = StateProps & DispatchProps & OwnProps

const AddFolderForm: React.FC<Props> = ({ hideFormFolderCreactor, addFolder }) => {
  const maxLenght = 30
  const [inputValue, setInputValue] = useState<string>('')
  const [colorId, setColorId] = useState<number>(0)

  const handleAddNewFolder = () => {
    if (inputValue.length > 0 && inputValue.length <= maxLenght) {
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
      <Input value={inputValue} setValue={setInputValue} maxLenght={maxLenght} placeholder='Название папки' onSubmit={handleAddNewFolder}/>

      <div className='sidebar-colors'>
        {colorList.colors.map((color, index) => {
          return <button key={color} onClick={handleChangeColor(index)}
            className={classNames('sidebar-colors__item', 'color-' + color, { 'active': colorId === index })}></button>
        })}
      </div>

      <button className='btn btn-submit w100' onClick={handleAddNewFolder}>Добавить</button>
    </div>
  )
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>
  (null, { addFolder })(AddFolderForm)