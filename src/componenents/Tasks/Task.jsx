/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

function Task({
  taskName, toggleDone, done, id,
}) {
  const handleChange = () => {
    toggleDone(id);
  };

  return (
    <li className={`list-item ${done ? 'done' : ''}`}>
      <label className="list-item-label">
        <input
          type="checkbox"
          className="list-item-checkbox"
          onChange={handleChange}
          checked={done}
        />
      </label>
      {taskName}
    </li>

  );
}

Task.propTypes = {
  taskName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  toggleDone: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Task;
