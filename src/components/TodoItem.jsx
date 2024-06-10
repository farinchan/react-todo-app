import React from 'react'

const TodoItem = ({ todo, toggleCompleted, toggleRemove }) => {
  // Definisikan function getTodoTitleStyle di sini
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { 
        textDecoration: 'line-through',
        color: '#828691'
       }
    } else {
      return { textDecoration: 'none' }
    }
  }



  return (
    <div style={styles.todoItem}>
      <input type="checkbox" onChange={() => { toggleCompleted(todo.id) }} style={styles.checkbox} />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button onClick={() => { toggleRemove(todo.id) }} style={styles.button}>x</button>
    </div>
  )
}

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    'letter-spacing': '0.02rem',
    'transition': 'all 0.3s ease-out',
    'border-left': '5px solid #cf972e',
    'margin-bottom': '0.5rem',
    background: "#494847",

  },
  checkbox: {
    height: '18px',
    width: '18px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
}

export default TodoItem