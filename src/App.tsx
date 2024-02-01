import { useState } from 'react';
import TaskList from './Components/TaskList/TaskList';
import TodoTask from './Components/TodoTask';
import { userTask } from './types';

// const taskLists = [
//   { id: 1, taskName: 'Find a job' },
//   { id: 2, taskName: 'do something' },
// ];

function App() {
  const [taskList, setTaskList] = useState<[] | userTask[]>([]);

  const handleAddTask = (newTask: userTask) => {
    setTaskList(task => [...task, newTask]);
  };

  const handleDeleteTask = () => {
    setTaskList([]);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl text-center mb-4'>Ultimate Todo App</h1>
      <div className='flex p-8 border-2 border-teal-800 rounded-md'>
        <TaskList taskList={taskList} onDeleteTask={handleDeleteTask} />
        <TodoTask onAddTask={handleAddTask} />
      </div>
    </div>
  );
}

export default App;
