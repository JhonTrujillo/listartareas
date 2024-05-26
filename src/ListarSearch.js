//Para usar Estados State se necesita importar React al componente.
import React from 'react'
import './ListarSearch.css';
// se crea el componente ListaSearch
function ListarSearch() {

  //se crea Estado recibe 2 propiedades estado y actualizador del estado inicializamos estado.
  const [searchValue, setSearchValue] = React.useState('');

  console.log('Usuario busca las tareas ' + searchValue);

    return (
      <input placeholder="Buscar Tarea" 
      className='ListarSearch'
      //establecemos en valor por defecto en el input "String vacio" 
      value={searchValue} 
      onChange={(event) => {
        //se llama la funcion actualizadora de estado para capturar informacion del input,
        //llamar event.target.value
        setSearchValue(event.target.value);
        // console.log('Escribiste en el Search');
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
      }}
      />
    )
  }

  // despues de crear el componente se debe Exportar y luego importar en App.js
//   export default ListaCounter; // Export por Default
  export {ListarSearch}// Export nombrados