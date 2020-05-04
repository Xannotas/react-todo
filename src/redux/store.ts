import { createStore } from 'redux'
import { Folder, Todo } from './../types';

const ADD_FOLDER = 'FOLDER:ADD'
const SET_FOLDER_ID = 'FOLDER:SET-ID'
const TODO_ADD = 'TODO:ADD'
const TODO_COMPLITE = 'TODO:COMPLITE'
const TODO_DELETE = 'TODO:DELETE'

const initialState = {
  folders: [] as Folder[],
  currentFolderId: 0 as number
}
type InitialState = typeof initialState
const rootReducer = (state = initialState, action: RootAction): InitialState => {
  switch (action.type) {
    case ADD_FOLDER: {
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
        currentFolderId: action.id
      }
    }

    case TODO_COMPLITE: {
      const stateCopy = { ...state, folders: [...state.folders] }
      stateCopy.folders[state.currentFolderId].todos.map(todo => todo.id === action.id ? todo.complited = !todo.complited : todo)
      return stateCopy
    }

    case TODO_DELETE: {
      const newState = {...state, folders: [...state.folders]}
      const todos : Todo[] = state.folders[state.currentFolderId].todos.filter(todo => todo.id !== action.id)
      newState.folders[state.currentFolderId].todos = todos

      return newState
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
export type RootAction = AddFolder | AddTodo | SetFolderId | CompliteTodo | DeleleTodo

export type AddFolder = {
  type: typeof ADD_FOLDER,
  title: string,
  colorName: string
}
export const addFolder = (title: string, colorName: string = 'default'): AddFolder => {
  return {
    type: ADD_FOLDER,
    title,
    colorName
  }
}
export type SetFolderId = {
  type: typeof SET_FOLDER_ID,
  id: number
}
export const setFolderId = (id: number): SetFolderId => {
  return {
    type: SET_FOLDER_ID,
    id
  }
}

export type AddTodo = {
  type: typeof TODO_ADD,
  text: string
}
export const addTodo = (text: string): AddTodo => {
  return {
    type: TODO_ADD,
    text
  }
}

export type CompliteTodo = {
  type: typeof TODO_COMPLITE,
  id: number
}
export const compliteTodo = (id: number): CompliteTodo => {
  return {
    type: TODO_COMPLITE,
    id
  }
}

export type DeleleTodo = {
  type: typeof TODO_DELETE,
  id: number
}
export const deleleTodo = (id: number): DeleleTodo => {
  return {
    type: TODO_DELETE,
    id
  }
}