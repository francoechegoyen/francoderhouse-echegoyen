import './App.css';
import Navbar from './components/NavBar/NavBar';
import Greeting from './components/ItemListContainer';

const App = props => {

  return (
    <div className="App">
      <Navbar />
      <Greeting />
  </div>
  );
}
export default App