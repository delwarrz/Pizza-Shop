import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Pages/Home';
import CartPage from './Pages/CartPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
