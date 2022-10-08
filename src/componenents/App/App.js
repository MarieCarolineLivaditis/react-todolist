import Form from '../Form/Form';
import Tasks from '../Tasks/Tasks';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todolist</h1>
        <Form />
        <Tasks />
      </header>
    </div>
  );
}

export default App;
