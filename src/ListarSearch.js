//1. Para usar Estados State se necesita importar React al componente.
import React from 'react'
import './ListarSearch.css';
// se crea el componente ListaSearch
//para heredar los valores del componente padre a hijo se solicitan en la funcion
function ListarSearch({
  searchValue, 
  setSearchValue
}) {

  //2. se crea Estado recibe 2 propiedades estado y actualizador del estado inicializamos estado.
  // para heredar estados entre componentes se debe de padre a hijo, se traslada estado a App.js
  // const [searchValue, setSearchValue] = React.useState('');

  //5. se valida que se actualiza el estado.
  // para heredar estados se debe de padre a hijo, se traslada estado a App.js
  // console.log('Usuario busca las tareas ' + searchValue);

    return (
      <input placeholder="Buscar Tarea" 
      className='ListarSearch'
      //3. establecemos en valor por defecto en el input "String vacio" 
      value={searchValue} 
      onChange={(event) => {
        //4. se llama la funcion actualizadora de estado para capturar informacion del input,
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