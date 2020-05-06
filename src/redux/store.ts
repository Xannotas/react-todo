import { createStore } from 'redux'
import rootReducer from './rootReducer'

const store = createStore(
  rootReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// @ts-ignore
window._state = store.getState()

export type RootState = ReturnType<typeof rootReducer>
export default store

type ActionPropsType<T> = T extends { [key: string]: infer U } ? U : never
type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<ActionPropsType<T>>
export type Actions = InferActionsType<typeof actions>

export const actions = {
  addFolder: (title: string, colorName: string = 'default') => ({ type: 'FOLDER:ADD', title, colorName } as const),
  deleteFolder: (folderId: number) => ({ type: 'FOLDER:DELETE', folderId } as const),
  setFolderId: (folderId: number) => ({ type: 'FOLDER:SET-ID', folderId } as const),
  setFolderTitle: (folderId: number, folderTitle: string) => ({ type: 'FOLDER:SET-TITLE', folderId, folderTitle } as const),
  addTodo: (folderId: number, text: string) => ({ type: 'TODO:ADD', folderId, text } as const),
  deleleTodo: (folderId: number, todoId: number) => ({ type: 'TODO:DELETE', folderId, todoId } as const),
  compliteTodo: (folderId: number, todoId: number) => ({ type: 'TODO:SET_COMPLITE', folderId, todoId } as const),
  showAllFolders: () => ({ type: 'FOLDER:SHOW-ALL' } as const)
}