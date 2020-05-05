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