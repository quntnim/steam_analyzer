import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Second from './pages/Second';
import Layout from './Layout';
import Login from './pages/Login';


const App = () => {
  return (
    <Routes className="App">
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/second' element={<Second />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
