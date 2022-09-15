import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

  const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL);
  // const changeState = (id) => {
  //   console.log('ToDo: Cambiar estado de una Task');
  // }

  return (
    <div>
      <div>
        <h1>
          Your Tasks: 
        </h1>
      </div>
      {/* Aplicar un For/Map para realizar una lista de tareas */}
      <TaskComponent task = { defaultTask }> </TaskComponent>
    </div>
  );
};


export default TaskListComponent;
