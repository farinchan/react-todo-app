import React, { useState } from 'react';
import Todos from './components/Todos';

const handleClick = () => {
  console.log('Button clicked');
}

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  console.log(todos)


  return (
    <div>
      <h1>Belajar di Progate</h1>
      <Todos todos={todos} />
    </div>
  );
}

export default App;