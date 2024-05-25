// se crea el componente ListaItem
function ListarItem(props) {
    return (
      <li>
        <span>V{props.completed}</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    )
  }
  
  export {ListarItem}// Export nombrados