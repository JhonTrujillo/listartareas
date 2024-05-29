import './ListarItem.css'
// se crea el componente ListaItem
function ListarItem(props) {
    return (
      <li className='ListarItem'>
        <span 
          className={`Icon Icon-ckeck ${props.
          completed && "Icon-check--active"}`}
          onClick ={props.onComplete}
        >
            V{props.completed}
          
        </span>
        <p className={`ListarItem-p ${props.completed && "ListarItem-p--complete"}`}>{props.text}
        </p>
        <span 
        className='Icon Icon-delete'
        onClick ={props.onDelete}
        >X</span>
      </li>
    )

  }
  
  export {ListarItem}// Export nombrados