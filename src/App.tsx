import React from 'react';
import './App.css';
import { FormSimulationColumn } from './components/FormSimulationColumn';
import { ResultsSimulationColumn } from './components/ResultsSimulationColumn';
import { SimulationContainer } from './components/SimulationContainer';

function App() {
  return (
    <div className="App">
      <SimulationContainer>
        <FormSimulationColumn/>
        <ResultsSimulationColumn/>
      </SimulationContainer>
    </div>
  );
}

export default App;
