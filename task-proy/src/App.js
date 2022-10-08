import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list.jsx';
import ComponentA from './components/container/componentA';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3.jsx';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ComponentA></ComponentA> */}

        {/* Ejemplo de uso de Hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre = "Roberto">
          {/** Todo lo que hay aquí adentro es tratado como props.children */}
          <span>
            Contenido del props.children
          </span>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
