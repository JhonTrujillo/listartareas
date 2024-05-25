// se crea el componente ListaCounter
function ListarCounter({total, completed}) {
    return (
      <h1>
        Has Completado {completed} de {total} tareas
      </h1>
    )
  }

  // despues de crear el componente se debe Exportar y luego importar en App.js
  //   export default ListaCounter; // Export por Default
  export {ListarCounter}// Export nombrados