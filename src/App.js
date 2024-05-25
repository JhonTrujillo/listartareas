// import logo from './logo.svg';
import { ListarCounter } from './ListarCounter';
import { ListarSearch } from './ListarSearch';
import { ListarTareas } from './ListarTareas';
import { ListarItem } from './ListarItem';
import { CrearItemButtom } from './CrearItemButtom';
import React from 'react';
import './App.css';

const defaultTareas = [
  { text: 'Tareas 1', completed: true },
  { text: 'Tareas 2', completed: false },
  { text: 'Tareas 3', completed: false },
  { text: 'Tareas 4', completed: false },
];

function App() {
  return (
    // <div className="App"> {/*contenedor global por defecto*/}</div>
    <React.Fragment>
      {/* Se llaman los componentes de react */}
      <ListarCounter completed={16} total={25}/>
      <ListarSearch />
      <ListarTareas>
        {defaultTareas.map(tarea => (
          <ListarItem 
          key={tarea.text} 
          text={tarea.text}
          completed={tarea.completed}
          />
        ))}
      </ListarTareas>
      <CrearItemButtom /> 
    </React.Fragment>

  );
}

export default App;
