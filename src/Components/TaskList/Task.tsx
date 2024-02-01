import { useState } from 'react';
import { taskType } from '../../types';

const Task = ({ task }: taskType) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>): void {
    setIsChecked(e.target.checked);
  }
  return (
    <div className='flex gap-2'>
      <input type='checkbox' checked={isChecked} onChange={handleCheckbox} />
      <p className={isChecked ? 'line-through' : 'no-underline'}>
        {task.taskName}
      </p>
    </div>
  );
};

export default Task;
