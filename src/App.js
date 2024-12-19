
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
  <>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/Home' element={<Home></Home>}></Route>
  <Route path='/signup' element={<SignUpPage></SignUpPage>}></Route>
  <Route path='/login' element={<LoginPage></LoginPage>}></Route>


</Routes>

  </>
  );
}

export default App;
