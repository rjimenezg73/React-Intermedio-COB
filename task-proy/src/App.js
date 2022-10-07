import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list.jsx';
import ComponentA from './components/container/componentA';
import Ejemplo1 from './hooks/Ejemplo1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ComponentA></ComponentA> */}

        {/* Ejemplo de uso de Hooks */}
        <Ejemplo1></Ejemplo1>
      </header>
    </div>
  );
}

export default App;
