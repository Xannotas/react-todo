import React, { useState, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { RootState, addFolder } from './../../redux/store'

type StateProps = {

}
type DispatchProps = {
  addFolder: (text: string, color: string) => void
}
type OwnProps = {
  hideFormFolderCreactor: () => void;
}
type Props = StateProps & DispatchProps & OwnProps

const AddFolderForm: React.FC<Props> = ({ hideFormFolderCreactor, addFolder }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [colorName, setColorName] = useState<string>('default')

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
    if (inputValue.length && inputValue.length < 30) {
      addFolder(inputValue, colorName)
      setInputValue('')
      hideFormFolderCreactor()
    }
  }

  return (
    <div className='sidebar__create-folder-form'>
      <button className='btn btn-close' onClick={hideFormFolderCreactor}>&times;</button>
      <input className='input' value={inputValue} autoFocus placeholder='Название папки'
        onChange={handleInput} onKeyDown={handleKeyDown}
      />
      {/* COLORS */}
      <button className='btn btn-submit w100' onClick={handleSubmit}>Добавить</button>
    </div>
  )
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>
  (null, { addFolder })(AddFolderForm)