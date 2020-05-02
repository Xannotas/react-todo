import React, {useState, ChangeEvent} from 'react'

interface IAddFolderFormProps {
  closeFolderForm: any;
  addNewFolder: any;
}

export default function AddFolderForm({closeFolderForm, addNewFolder} : IAddFolderFormProps) {
  const [inputValue, setInputValue] = useState<string>('')
  const [color, setColor] = useState<string>('default')

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)
  }

  const handleSubmit = () => {
    addFolder()
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter'){
      addFolder()
    }
  }

  const addFolder = () =>{
    addNewFolder(inputValue, color)
    setInputValue('')
    closeFolderForm()
  }

  return (
    <div className='sidebar__create-folder-form'>
      <button className='btn btn-close' onClick={closeFolderForm}>&times;</button>
      <input className='input' value={inputValue} autoFocus placeholder='Название папки'
          onChange={handleInput} onKeyDown={handleKeyDown}
      />
      {/* COLORS */}
      <button className='btn btn-submit w100' onClick={handleSubmit}>Добавить</button>
    </div>
  )
}
