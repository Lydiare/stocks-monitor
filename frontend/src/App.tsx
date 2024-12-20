import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';

const App: React.FC = () => {
  return (
<Router>

    <Header />

    <Home></Home>
</Router>
    );
};

export default App;

