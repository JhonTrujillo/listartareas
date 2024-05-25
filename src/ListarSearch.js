import './ListarSearch.css';
// se crea el componente ListaSearch
function ListarSearch() {
    return (
      <input placeholder="Buscar Tarea" className='ListarSearch'/>
    )
  }

  // despues de crear el componente se debe Exportar y luego importar en App.js
//   export default ListaCounter; // Export por Default
  export {ListarSearch}// Export nombrados