import logo from './logo.svg';
import './App.css';
import MainLayout from './layouts/MainLayout';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
