import React from 'react'
import { connect } from 'react-redux'
import { RootState, compliteTodo, deleleTodo } from '../../redux/store'

type OwnProps = {
  id: number,
  text: string,
  complited: boolean
}
type StateProps = {}
type DispathProps = {
  compliteTodo: (id: number) => void,
  deleleTodo: (id: number) => void
}
type Props = OwnProps & DispathProps & StateProps
const TodoItem: React.FC<Props> = ({ id, complited, text, compliteTodo, deleleTodo }) => {
  const handleChangeCompleted = () => {
    compliteTodo(id)
  }

  const handleTodoDelete = () => {
    deleleTodo(id)
  }

  return (
    <div className='todo-item'>
      <label className='todo-item-content'>
        <input type="checkbox" checked={complited} onChange={handleChangeCompleted} />
        <span className="checkbox">
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className='todo-item-content__text'>{text}</span>
      </label>

      <button className='btn btn-remove' onClick={handleTodoDelete}>&times;</button>
    </div>
  )
}

export default connect<StateProps, DispathProps, OwnProps, RootState>(null, { compliteTodo, deleleTodo })(TodoItem)