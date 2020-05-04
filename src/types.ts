export type Folder = {
  id: number,
  title: string,
  color: string,
  todos: Todo[]
}
export type Todo = {
  id: number,
  text: string,
  complited: boolean
}