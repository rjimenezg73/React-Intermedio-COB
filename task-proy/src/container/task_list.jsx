import React from 'react';
import { LEVELS } from '../models/levels.enum';
import { Task } from '../models/task.class';


const TaskListComponent = () => {

  const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL);

  return (
    <div>
      <div>
        Your Task:
      </div>
      {/* Aplicar un For/Map para realizar una lista de tareas */}
      <TaskListComponent task={defaultTask}></TaskListComponent>
    </div>
  );
};


export default TaskListComponent;
