import { useState } from 'react';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className="container">
        <div className="box">
          <h1>ToDo-List</h1>

          <div
          className='inputTextDiv'>
            <input
              type="text"
              placeholder="Add Something to do..."
              value={newTask}
              onChange={handleInputChange}
              className='inputText'/>
            <button className="add-button" onClick={addTask}>
              Add
            </button>
          </div>

          <ul>
            {tasks.map((task, index) => 
              <li key={index}>
                <span className="text">{task}</span>
                {/* Edit Butten  */}
                {/* <button 
                className='edit-button'
                onClick={() => editTask(index)}>
                  Edit
                </button> */}
                {/* Delete Butten */}
                <button 
                className='delete-button'
                onClick={() => deleteTask(index)}>
                  Remove
                </button>
              </li>
            )}
          </ul>

        </div>
      </div>
    </>
  );
}

export default App;
