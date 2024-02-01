import React, { useState } from 'react';
import { TodoTaskType } from '../types';
import Heading from './Common/Heading';

const TodoTask = ({ onAddTask }: TodoTaskType) => {
  const [taskText, setTaskText] = useState('');

  const handleTaskText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      id: Number(new Date().getTime().toString()),
      taskName: taskText,
      isCheck: false,
    };

    onAddTask(newTask);
    setTaskText('');
  };
  return (
    <div className='px-5 py-2'>
      <Heading>Create Todo</Heading>
      <form className='flex gap-2' onSubmit={handleFormSubmit}>
        <input
          type='text'
          className='border border-gray-400 px-4 py-2 rounded-full focus:border-teal-400 focus:outline-none '
          placeholder='Enter task'
          value={taskText}
          onChange={handleTaskText}
        />
        <button
          className='px-4 py-2 bg-teal-700 text-white rounded-md'
          type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoTask;
