import { createStore } from 'redux'
import { Folder, Todo } from './../types';

const FOLDER_ADD = 'FOLDER:ADD'
const SET_FOLDER_ID = 'FOLDER:SET-ID'
const FOLDER_DELETE = 'FODLER:DELETE'

const TODO_ADD = 'TODO:ADD'
const TODO_COMPLITE = 'TODO:COMPLITE'
const TODO_DELETE = 'TODO:DELETE'

const SHOW_ALL_FOLDERS = 'SHOW-ALL-FOLDERS:ON'

const initialState = {
  folders: [] as Folder[],
  currentFolderId: 0 as number,
  isShowAllFolders: false as boolean
}

type InitialState = typeof initialState
const rootReducer = (state = initialState, action: RootAction): InitialState => {
  switch (action.type) {
    case FOLDER_ADD: {
      const foldersLenght = state.folders.length
      const newFolder: Folder = {
        id: foldersLenght ? state.folders[foldersLenght - 1].id + 1 : 0,
        color: action.colorName,
        title: action.title,
        todos: []
      }
      return {
        ...state,
        folders: [...state.folders, newFolder]
      }
    }

    case TODO_ADD: {
      let newTodo: Todo = {
        id: state.folders[state.currentFolderId].todos.length,
        text: action.text,
        complited: false
      }
      const stateCopy = { ...state, folders: [...state.folders] }
      stateCopy.folders[state.currentFolderId].todos.push(newTodo)
      return stateCopy
    }

    case SET_FOLDER_ID: {
      return {
        ...state,
        currentFolderId: action.id,
        isShowAllFolders: false
      }
    }

    case TODO_COMPLITE: {
      const stateCopy = { ...state, folders: [...state.folders] }
      stateCopy.folders[action.folderId].todos.map(todo => todo.id === action.todoId ? todo.complited = !todo.complited : todo)
      return stateCopy
    }

    case TODO_DELETE: {
      const newState = { ...state, folders: [...state.folders] }
      const todos: Todo[] = state.folders[state.currentFolderId].todos.filter(todo => todo.id !== action.id)
      newState.folders[state.currentFolderId].todos = todos

      return newState
    }

    case FOLDER_DELETE: {
      return {
        ...state,
        folders: state.folders.filter(folder => folder.id !== state.folders[action.id].id),
        currentFolderId: state.folders[state.currentFolderId - 1].id
      }
    }
    case SHOW_ALL_FOLDERS: {
      return {
        ...state,
        isShowAllFolders: true
      }
    }

    default:
      return state;
  }
}
const store = createStore(
  rootReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export type RootState = ReturnType<typeof rootReducer>
export default store

// ACTIONS
export type RootAction = AddFolder | AddTodo | SetFolderId |
  CompliteTodo | DeleleTodo | DeleteFolder | ShowAllFolders

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

type AddTodo = { type: typeof TODO_ADD, text: string }
export const addTodo = (text: string): AddTodo => {
  return {
    type: TODO_ADD,
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

type DeleleTodo = { type: typeof TODO_DELETE, id: number }
export const deleleTodo = (id: number): DeleleTodo => {
  return {
    type: TODO_DELETE,
    id
  }
}

type DeleteFolder = { type: typeof FOLDER_DELETE, id: number }
export const deleteFolder = (id: number): DeleteFolder => {
  return {
    type: FOLDER_DELETE,
    id
  }
}

type ShowAllFolders = { type: typeof SHOW_ALL_FOLDERS }
export const showAllFolders = (): ShowAllFolders => {
  return { type: SHOW_ALL_FOLDERS }
}