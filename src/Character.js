import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import styled,{keyframes} from 'styled-components'

const StyledDiv=styled.div``

const StyledTabDiv=styled.div``

 const Character=(props)=>{
    const {selectedCharacterId,open,index,char}=props

    return(<div onClick={()=>open(index)}>
        <h1>{props.char.name}</h1>
        <div> prop </div>
        </div>
        )
}

export default Character