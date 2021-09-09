import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Pages/Home';
import CartPage from './Pages/CartPage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/login" exact component={LoginPage} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
