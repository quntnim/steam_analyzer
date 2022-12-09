import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Success from './pages/Success';
import Layout from './Layout';
import Login from './pages/Login';


const App = () => {
  return (
    <Routes className="App">
      <Route path='/login' element={<Login />} />
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<Success />} />
      </Route>
    </Routes>
  );
}

export default App;
