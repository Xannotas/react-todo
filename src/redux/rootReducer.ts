import { Folder, Todo } from './../types';
import { findFolderIdOfState } from '../utils/helpers';
import {
  RootAction, TODO_ADD, FOLDER_ADD, SET_FOLDER_ID, TODO_COMPLITE,
  TODO_DELETE, FOLDER_DELETE, SHOW_ALL_FOLDERS, SET_FOLDER_TITLE
} from './actions';

const initialState = {
  folders: [] as Folder[],
  currentFolderId: null as number | null,
  isShowAllFolders: false as boolean
}
export type InitialState = typeof initialState

const persistedState: InitialState = {
  folders: JSON.parse(localStorage.getItem('folders') || ''),
  currentFolderId: localStorage.getItem('currentFolderId') !== '' ? Number(localStorage.getItem('currentFolderId')) : null,
  isShowAllFolders: localStorage.getItem('isShowAllFolders') === 'true' ? true : false
}

const rootReducer = (state = persistedState, action: RootAction): InitialState => {
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
        folders: [...state.folders, newFolder],
        currentFolderId: newFolder.id,
        isShowAllFolders: !state.folders.length && false
      }
    }

    case TODO_ADD: {
      let newTodo: Todo = {
        id: state.folders[action.folderId].todos.length,
        text: action.text,
        complited: false
      }
      const stateCopy = { ...state, folders: [...state.folders] }
      stateCopy.folders[action.folderId].todos.push(newTodo)
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
      const folderId = findFolderIdOfState(state.folders, action.folderId)
      stateCopy.folders[folderId].todos.map(todo => todo.id === action.todoId ? todo.complited = !todo.complited : todo)
      return stateCopy
    }

    case TODO_DELETE: {
      const newState = { ...state, folders: [...state.folders] }
      const todos: Todo[] = state.folders[action.folderId].todos.filter(todo => todo.id !== action.todoId)
      newState.folders[action.folderId].todos = todos

      return newState
    }

    case FOLDER_DELETE: {
      let newId: number | null = null
      if (state.folders.length < 2) {
        newId = null
      } else {
        const folderId = findFolderIdOfState(state.folders, action.folderId)
        newId = state.folders[folderId - 1] ? state.folders[folderId - 1].id : 0
      }
      return {
        ...state,
        folders: state.folders.length > 1 ? state.folders.filter(folder => folder.id !== action.folderId) : [],
        currentFolderId: newId,
        isShowAllFolders: newId === null ? true : false
      }
    }

    case SHOW_ALL_FOLDERS: {
      return {
        ...state,
        isShowAllFolders: true,
        currentFolderId: null
      }
    }

    case SET_FOLDER_TITLE: {
      return {
        ...state,
        folders: state.folders.map(folder => folder.id === action.folderId ? { ...folder, title: action.folderTitle } : folder)
      }
    }

    default:
      return state;
  }
}

export default rootReducer