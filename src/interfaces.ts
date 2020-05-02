import {Todo} from './types'

export interface ITodoFolder {
  id: number,
  color: string,
  title: string,
  todos: Todo[]
}