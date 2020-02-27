import React from 'react';

import Layout from './hoc/Layout';
import Calculator from './containers/Calculator/Calculator';

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Calculator></Calculator>
      </Layout>
    </div>
  );
}

export default App;
