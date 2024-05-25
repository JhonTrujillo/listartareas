import './CrearItemButtom.css';
// se crea el componente ListaCounter
function CrearItemButtom() {
    return (
      <button className="CreateItemButtom" 
      onClick={()=> console.log('Diste Click')}>+</button>
    )
  }

  // despues de crear el componente se debe Exportar y luego importar en App.js
  //   export default ListaCounter; // Export por Default
  export {CrearItemButtom}// Export nombrados