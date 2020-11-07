import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import styled,{keyframes} from 'styled-components'

const StyledDiv=styled.div`

font-size:1rem;
width: 60%;
margin-left:auto;
margin-right:auto;

button {
    font-size: 1.5rem;
    background-color: #d1d14b;
    border: 4px outset black;
}
`

const StyledTabDiv=styled.div`
display: ${pr=>{
    return pr.details ? 'block' : 'none'}
};
width: 30%;
background-color:black;
content-align:center;
color:#d1d14b;
margin-left:auto;
margin-right:auto;
margin-top: 1rem;
margin-bottom: 1rem;
padding: 2rem 0rem 2rem 0rem;
`

 const Character=(props)=>{
    const {selectedCharacterId,open,index,char}=props

    return(<StyledDiv>
        <h1>{props.char.name}</h1>
    <button onClick={()=>open(index)}>{selectedCharacterId===index ? "Close Details":"Open Details"}</button>
        <StyledTabDiv details={selectedCharacterId===index}>
            <h1>General Info:</h1>
                <p>Name:{char.name}</p>
                <p>Birth Year:{char.height}</p> 
                <p>Gender:{char.gender}</p>
            <h1>Physical Characteristics:</h1>
                <p>Height:{char.height}</p>
                <p>Mass:{char.mass}</p>
                <p>Eye Color:{char.eye_color}</p>
                <p>Hair Color:{char.hair_color}</p>
                <p>Skin Color:{char.skin_color}</p>
            </StyledTabDiv>
        </StyledDiv>
        )
}

export default Character