import logo from './logo.svg';
import './App.css';
import MainLayout from './layouts/MainLayout';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = window.location.origin;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ 
        redirect_uri: redirectUri,
        audience: process.env.REACT_APP_AUTH0_AUDIENCE
      }}
      cacheLocation="localstorage"
    >
      <BrowserRouter>
        <MainLayout />
        <ToastContainer />
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
