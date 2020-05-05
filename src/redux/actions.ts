export const FOLDER_ADD = 'FOLDER:ADD'
export const FOLDER_DELETE = 'FODLER:DELETE'
export const SET_FOLDER_ID = 'FOLDER:SET-ID'
export const SET_FOLDER_TITLE = 'FOLDER:SET-TITLE'

export const TODO_ADD = 'TODO:ADD'
export const TODO_COMPLITE = 'TODO:COMPLITE'
export const TODO_DELETE = 'TODO:DELETE'

export const SHOW_ALL_FOLDERS = 'SHOW-ALL-FOLDERS:ON'


export type RootAction = AddFolder | AddTodo | SetFolderId |
  CompliteTodo | DeleleTodo | DeleteFolder | ShowAllFolders | SetFolderTitle

type AddFolder = { type: typeof FOLDER_ADD, title: string, colorName: string }
export const addFolder = (title: string, colorName: string = 'default'): AddFolder => {
  return {
    type: FOLDER_ADD,
    title,
    colorName
  }
}

type SetFolderId = { type: typeof SET_FOLDER_ID, id: number }
export const setFolderId = (id: number): SetFolderId => {
  return {
    type: SET_FOLDER_ID,
    id
  }
}

type AddTodo = { type: typeof TODO_ADD, folderId: number, text: string }
export const addTodo = (folderId: number, text: string): AddTodo => {
  return {
    type: TODO_ADD,
    folderId,
    text
  }
}

type CompliteTodo = { type: typeof TODO_COMPLITE, folderId: number, todoId: number }
export const compliteTodo = (folderId: number, todoId: number): CompliteTodo => {
  return {
    type: TODO_COMPLITE,
    folderId,
    todoId
  }
}

type DeleleTodo = { type: typeof TODO_DELETE, folderId: number, todoId: number }
export const deleleTodo = (folderId: number, todoId: number): DeleleTodo => {
  return {
    type: TODO_DELETE,
    folderId,
    todoId
  }
}

type DeleteFolder = { type: typeof FOLDER_DELETE, folderId: number }
export const deleteFolder = (folderId: number): DeleteFolder => {
  return {
    type: FOLDER_DELETE,
    folderId
  }
}

type ShowAllFolders = { type: typeof SHOW_ALL_FOLDERS }
export const showAllFolders = (): ShowAllFolders => {
  return { type: SHOW_ALL_FOLDERS }
}

type SetFolderTitle = { type: typeof SET_FOLDER_TITLE, folderId: number, folderTitle: string }
export const setFolderTitle = (folderId: number, folderTitle: string): SetFolderTitle => {
  return { type: SET_FOLDER_TITLE, folderId, folderTitle }
}