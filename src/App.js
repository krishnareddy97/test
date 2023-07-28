import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import Header from './components/header';
import ClientsList from './components/clientsList';

function App() {
  return (
    <div className="app">
      <Header />
      <ClientsList />
    </div>
  );
}

export default App;
