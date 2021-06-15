import './App.css';
import Navbar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Productos } from './components/products/Productos'

const App = props => {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
  </div>
  );
}
export default App