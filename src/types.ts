export interface userTask {
  id: number;
  taskName: string;
}

export interface taskType {
  task: userTask;
}

export interface HeadingType {
  children: React.ReactNode;
}

export interface TodoTaskType {
  onAddTask: (newTask: userTask) => void;
}

export interface TaskListType {
  taskList: userTask[];
  onDeleteTask: () => void;
}
