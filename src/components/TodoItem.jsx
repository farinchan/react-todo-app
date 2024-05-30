import React from "react";

const TodoItem = ({ todo }) => {
    return <p style={styles.todoItem}> {todo.title} </p>
}

const styles = {
    todoItem: {
      border: '2px solid #f4f4f4',
      fontSize: '24px',
    },
  }

export default TodoItem