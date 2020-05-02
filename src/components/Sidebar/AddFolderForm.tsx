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
    addNewFolder(inputValue, color)
    setInputValue('')
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'enter'){
      addNewFolder(inputValue, color)
      setInputValue('')
    }
  }

  return (
    <div className='sidebar__create-folder-form'>
      <button className='btn btn-close' onClick={closeFolderForm}>&times;</button>
      <input value={inputValue} onChange={handleInput} onKeyDown={handleKeyDown} placeholder='Название папки'/>
      {/* COLORS */}
      <button className='btn btn-submit' onClick={handleSubmit}>Добавить</button>
    </div>
  )
}
