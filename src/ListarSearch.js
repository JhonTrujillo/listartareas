import './ListarSearch.css';
// se crea el componente ListaSearch
function ListarSearch() {
    return (
      <input placeholder="Buscar Tarea" 
      className='ListarSearch'
      onChange={(event) => {
        console.log('Escribiste en el Search');
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
      />
    )
  }

  // despues de crear el componente se debe Exportar y luego importar en App.js
//   export default ListaCounter; // Export por Default
  export {ListarSearch}// Export nombrados