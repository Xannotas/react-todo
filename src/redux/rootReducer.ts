import { Folder, Todo } from './../types';
import { findFolderIdOfState } from '../utils/helpers';
import { Actions } from './store';

const initialState = {
  folders: [] as Folder[],
  currentFolderId: null as number | null,
  isShowAllFolders: false as boolean
}
export type InitialState = typeof initialState

const persistedState: InitialState = {
  folders: localStorage.getItem('folders') ? JSON.parse(localStorage.getItem('folders')!) : [],
  currentFolderId: localStorage.getItem('currentFolderId') !== '' ? Number(localStorage.getItem('currentFolderId')) : null,
  isShowAllFolders: localStorage.getItem('isShowAllFolders') === 'true' ? true : false
}

const rootReducer = (state = persistedState, action: Actions): InitialState => {
  switch (action.type) {
    case 'FOLDER:ADD': {
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

    case 'TODO:ADD': {
      let newTodo: Todo = {
        id: state.folders[findFolderIdOfState(state.folders, action.folderId)].todos.length,
        text: action.text,
        complited: false
      }
      const stateCopy = { ...state, folders: [...state.folders] }
      stateCopy.folders[action.folderId].todos.push(newTodo)
      return stateCopy
    }

    case 'FOLDER:SET-ID': {
      return {
        ...state,
        currentFolderId: action.folderId,
        isShowAllFolders: false
      }
    }

    case 'TODO:SET_COMPLITE': {
      const stateCopy = { ...state, folders: [...state.folders] }
      const folderId = findFolderIdOfState(state.folders, action.folderId)
      stateCopy.folders[folderId].todos.map(todo => todo.id === action.todoId ? todo.complited = !todo.complited : todo)
      return stateCopy
    }

    case 'TODO:DELETE': {
      const newState = { ...state, folders: [...state.folders] }
      const todos: Todo[] = state.folders[findFolderIdOfState(state.folders, action.folderId)].todos.filter(todo => todo.id !== action.todoId)
      newState.folders[action.folderId].todos = todos

      return newState
    }

    case 'FOLDER:DELETE': {
      let newId: number | null = null

      if (state.folders.length > 1) {
        const curFolderIndex = findFolderIdOfState(state.folders, action.folderId)
        if (state.folders[curFolderIndex+1]){
          newId = state.folders[curFolderIndex+1].id
        } else if (state.folders[curFolderIndex-1]){
          newId = state.folders[curFolderIndex-1].id
        }
      }

      return {
        ...state,
        folders: state.folders.length > 1 ? state.folders.filter(folder => folder.id !== action.folderId) : [],
        currentFolderId: newId
      }
    }

    case 'FOLDER:SHOW-ALL': {
      return {
        ...state,
        isShowAllFolders: true,
        currentFolderId: null
      }
    }

    case 'FOLDER:SET-TITLE': {
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