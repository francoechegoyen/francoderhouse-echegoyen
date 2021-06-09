import './App.css';
import Navbar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

const App = props => {

  return (
    <div className="App">
      <Navbar />
      <div className="contenedorPrincipal">
         <ItemListContainer texto="Esto se va a editar próximamente" />
      </div>
  </div>
  );
}
export default App