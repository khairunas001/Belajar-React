import React, {useState} from 'react'
import './App.css';
import Heading from './components/heading'

function App() {
  const [profiles, setProdiles] = useState([
    {
      id: 1,
      name: "Anas",
      age: 22
    },
    {
      id: 2,
      name: "Jokowi",
      age: 90
    },
    {
      id: 3,
      name: "Soeharto",
      age: 70
    },
    {
      id: 4,
      name: "Soekarno",
      age: 76
    }

  ])

  return (
    <div className="App">
      {
        profiles.map(profile =>{

          return(
            <Heading profile={profile}></Heading>
          )
        })
      }
    </div>
  );
}

export default App;
