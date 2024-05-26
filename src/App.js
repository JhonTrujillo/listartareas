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
  { text: 'Tareas 4', completed: true },
];

function App() {

  //Estado Componente Search.
   const [searchValue, setSearchValue] = React.useState('');
   console.log('Usuario busca las tareas ' + searchValue);

   //Creando el estado de Tareas llamando por default el arreglo defaultTareas
   const [tareas, setTareas] = React.useState(defaultTareas);

  const completedTareas = tareas.filter(tareas => tareas.completed).length;
  const totalTareas = tareas.length;

  return (
    // <div className="App"> {/*contenedor global por defecto*/}</div>
    <React.Fragment>
      {/* Se llaman los componentes de react */}
      {/* <ListarCounter completed={16} total={25}/> */}
      <ListarCounter completed={completedTareas} total={totalTareas}/>
      
      <ListarSearch 
      //compartimos el estado Search al componente Search.
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
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
