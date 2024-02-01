import { TaskListType } from '../../types';
import Heading from '../Common/Heading';
import Task from './Task';

const TaskList = ({ taskList, onDeleteTask }: TaskListType) => {
  return (
    <div className='border-r-2 border-black px-5 py-2'>
      <Heading>Todo List</Heading>
      <div className='mb-4'>
        {taskList.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
      <button
        className='px-4 py-2 bg-teal-700 text-white rounded-md'
        type='submit'
        onClick={onDeleteTask}>
        Clear All Todos
      </button>
    </div>
  );
};

export default TaskList;
