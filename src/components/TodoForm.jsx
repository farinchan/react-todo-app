import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {

    const [title, setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(title)
        setTitle('')
    }

    // Definisikan function "handleChangeTitle"
    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    // Periksa apakah function "handleChangeTitle" berfungsi
    console.log(title)

    return (
        <div style={styles.container}>
            <form onSubmit={(event) => {
                handleSubmit(event)
            }}>
                <input
                    type="text"
                    placeholder="Add your Todo"
                    style={styles.formInput}
                    onChange={(event) => { handleChangeTitle(event) }}
                    value={title}

                />
                <button style={styles.button}>Add Todo</button>
            </form>
        </div>
    )
}

const styles = {
    container: {
        marginBottom: '32px',
    },
    formInput: {
        height: '66px',
        width: '450px',
        fontSize: '16px',
        padding: '0 16px',
        "font-size": "1em",
        background: "transparent",
        border: "1px solid #828691",
        color: '#44c0b6',

    },
    button: {
        height: '72px',
        fontSize: '16px',
        padding: '0.8em',
        color: '#44c0b6',
        "font-size": "1em",
        background: "transparent",
        border: "1px solid #828691",
        cursor: "pointer",


    },
}

export default TodoForm