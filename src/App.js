import './App.css';
import Navbar from './components/NavBar/NavBar';
import Greeting from './components/ItemListContainer';
import HomeContainer from "./containers/HomeContainer";

const App = props => {

  return (
    <div className="App">
      <Navbar />
      <Greeting />
      <HomeContainer />
  </div>
  );
}
export default App