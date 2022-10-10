import { useState } from 'react';
import Form from '../Form/Form';
import Message from '../Message/Message';
import Tasks from '../Tasks/Tasks';
import './App.scss';

function App() {
  const [value, setValue] = useState('');
  const [tasksList, setTaskList] = useState([]);

  const inputValue = (newValue) => {
    setValue(newValue);
  };

  const getNextId = (items) => {
    if (items.length === 0) {
      return 1;
    }

    const ids = items.map((item) => item.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  };

  const addNewTask = () => {
    const newTask = {
      id: getNextId(tasksList),
      taskName: value,
      done: false,
    };
    setTaskList([...tasksList, newTask]);
    setValue('');
  };

  console.log(tasksList);

  const toggleDone = (id) => {
    const newTaskList = tasksList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    setTaskList([...newTaskList]);
  };

  const undoneTasks = tasksList.filter((task) => !task.done);
  const doneTasks = tasksList.filter((task) => task.done);
  const sortedTasks = [...undoneTasks, ...doneTasks];

  return (
    <div className="app">
      <main className="app-main">
        <Form
          addNewTask={addNewTask}
          value={value}
          inputValue={inputValue}
        />
        <Message
          number={undoneTasks.length}
        />
        <Tasks
          tasksList={sortedTasks}
          toggleDone={toggleDone}
        />
      </main>
    </div>
  );
}

export default App;
