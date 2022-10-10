import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

function Form({
  addNewTask, inputValue, value,
}) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    inputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === '') {
      return;
    }
    addNewTask();
  };

  return (
    <form
      aria-label="Ajoutez une tâche"
      className="form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Ajoutez une tâche"
        className="form-input"
        onChange={handleChange}
        value={value}
        ref={inputRef}
      />
    </form>
  );
}

Form.propTypes = {
  addNewTask: PropTypes.func.isRequired,
  inputValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Form;
