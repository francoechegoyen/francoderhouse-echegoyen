import './App.css';
import Navbar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Titulo } from './components/ItemListContainer/ItemListContainer';
import { Productos } from './components/products/Productos'

const App = props => {

  return (
    <div className="App">
      <Navbar />
      <Titulo texto="Esto se va a editar próximamente" />
      <Productos />
      <ItemListContainer />
  </div>
  );
}
export default App