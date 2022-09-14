import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({task}) => {
  console.log(task);
  return (
    <div>
      <h2>
        Task Name: { task.name }
      </h2>
      <h3>
        Description: { task.description }
      </h3>
      <h4>
        Level: { task.level } 
      </h4>
      <h5>
        Status Task: { task.completed ? 'COMPLETED' : 'PENDING'}
      </h5>
    </div>
  );
};


TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
