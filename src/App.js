// import logo from './logo.svg';
import { ListarCounter } from './ListarCounter';
import { ListarSearch } from './ListarSearch';
import { ListarTareas } from './ListarTareas';
import { ListarItem } from './ListarItem';
import { CrearItemButtom } from './CrearItemButtom';
import React from 'react';
import './App.css';

const defaultTareas = [
  { text: 'Fresa', completed: true },
  { text: 'Pera', completed: false },
  { text: 'Manzana', completed: false },
  { text: 'limon', completed: true },
];

function App() {

  //Estado Componente Search.
   const [searchValue, setSearchValue] = React.useState('');
   console.log('Usuario busca las tareas ' + searchValue);

   //Creando el estado de Tareas llamando por default el arreglo defaultTareas
   const [tareas, setTareas] = React.useState(defaultTareas);

    //Contando tareas completadas
  const completedTareas = tareas.filter(tareas => tareas.completed).length;
  const totalTareas = tareas.length;

  //Buscando tareas
  const searchedTareas = tareas.filter(
    (tareas) => {
      return tareas.text.toLowerCase().includes
      (searchValue.toLocaleLowerCase());
    }
  );

  // completando tarea
  const completeTareas = (text) => {
    const newTareas = [... tareas];
    const tareasIndex = newTareas.findIndex(
      (tareas) => tareas.text == text
    );    
    newTareas[tareasIndex].completed = true;
    setTareas(newTareas);
  };

  //Eliminar Tarea completada
  const deleteTareas = (text) => {
    const newTareas = [... tareas];
    const tareasIndex = newTareas.findIndex(
      (tareas) => tareas.text == text
    );    
    newTareas.splice(tareasIndex, 1);
    setTareas(newTareas);
  };


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
        {searchedTareas.map(tarea => (
          <ListarItem 
          key={tarea.text} 
          text={tarea.text}
          completed={tarea.completed}
          onComplete={() => completeTareas(tarea.text)}
          onDelete={() => deleteTareas(tarea.text)}
          />
        ))}
      </ListarTareas>
      <CrearItemButtom /> 
    </React.Fragment>

  );
}

export default App;
