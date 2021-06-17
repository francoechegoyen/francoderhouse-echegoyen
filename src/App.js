import './App.css';
import Navbar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './screens/ItemDetailContainer/ItemDetailContainer';

const App = props => {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer/>
  </div>
  );
}
export default App