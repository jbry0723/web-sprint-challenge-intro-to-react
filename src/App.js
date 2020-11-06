import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Character from './Character'

const App = () => {
  const [chars,setChars]= useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState(null)
  
  

  useEffect(()=>{
    const fetchChars=()=>{
      axios.get(`https://swapi.dev/api/people/`)
        .then (res=>{
          setChars(res.data.results)
          
        })
        .catch (err=>{
          debugger
        })

    }
    fetchChars()
  },[])

  const openDetails = id => {
    setCurrentCharacterId(id)
    console.log("openDetails")
    console.log(id)
  }
  

  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.




console.log("chars", JSON.stringify(chars))

  return (
    <div className="App">
   
   {chars.map((eachChar, index)=>{
        return <Character 
        selectedCharacterId={currentCharacterId} 
        open={openDetails}
          index={index}
          key={index}
          char={eachChar}
          />
          
      })
    }
      
  
    </div>
    
  )
  }

export default App;
