import logo from './logo.svg';
import { ListarCounter } from './ListarCounter';
import { ListarSearch } from './ListarSearch';
import { ListarTareas } from './ListarTareas';
import { ListarItem } from './ListarItem';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Se llaman los componentes de react */}
      <ListarCounter />
      <ListarSearch />
      <ListarTareas>
        <ListarItem />
        <ListarItem />
        <ListarItem />
        <ListarItem />
      </ListarTareas>
      {/* <CrearItemButton /> */}

    </div>
  );
}

export default App;
