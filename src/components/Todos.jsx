import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({todos}) => {

    return (
        <div>
            <h1>My Todo List</h1>
            {todos.map((todo)=>{
                return <TodoItem key={todo.id} todo={todo} />
            })}
        </div>
    );
}

export default Todos;