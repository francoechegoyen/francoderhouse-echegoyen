import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/router';

const App = props =>{

  return<>
    <BrowserRouter>
     <Router/>
    </BrowserRouter>
  </>
}

export default App;