import PropTypes from 'prop-types';
import Task from './Task';

import './Tasks.scss';

function Tasks({ tasksList, toggleDone }) {
  return (
    <ul className="list">
      {tasksList.map((task) => (
        <Task
          key={task.id}
          {...task}
          toggleDone={toggleDone}
        />
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasksList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  toggleDone: PropTypes.func.isRequired,
};

export default Tasks;
