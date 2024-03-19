import React from 'react'

const TodoForm = () => {
  return (
    <form className='todoForm'>
      <input type="text"
      className='todo-Input'
      placeholder='Tâches du Jour' />
      <button type='submit' className='todo-btn'></button>
    </form>
  )
}

export default TodoForm
