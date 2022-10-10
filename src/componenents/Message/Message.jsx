import PropTypes from 'prop-types';
import './Message.scss';

function Message({ number }) {
  let message;
  if (number === 0) {
    message = 'Aucune tâche en cours';
  } else if (number === 1) {
    message = 'Une tâche en cours';
  } else {
    message = `${number} tâche en cours`;
  }
  return (
    <p className="message">{message}</p>
  );
}

Message.propTypes = {
  number: PropTypes.number.isRequired,
}
export default Message;
