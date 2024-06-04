import React from 'react'

const TodoItem = ({ todo, toggleCompleted }) => {
  // Definisikan function getTodoTitleStyle di sini
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' }
    } else {
      return { textDecoration: 'none' }
    }
  }

  

  return (
    <div style={styles.todoItem}>
      <input type="checkbox" onChange={()=>{toggleCompleted(todo.id)}} style={styles.checkbox} />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
    </div>
  )
}

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '10px',
    height: '18px',
    width: '18px',
  },
}

export default TodoItem