import './ListarTareas.css';

// se crea el componente ListaCounter
function ListarTareas(props) {
    return (
      <ul className="ListarTareas">
        {props.children}
      </ul>
    )
  }

  // despues de crear el componente se debe Exportar y luego importar en App.js
//   export default ListaCounter; // Export por Default
  export {ListarTareas}// Export nombrados