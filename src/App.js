import React, {useState, useEffect} from 'react'
import './App.css';
import AppTitle from './components/AppTitle'
import AppForm from './components/Form';
import AppTable from './components/Table'

function App() {
  
 
  return (
    <div className="App">
      <AppTitle></AppTitle>
      <AppForm></AppForm>
      <AppTable></AppTable>
    </div>
  );
}

export default App;
