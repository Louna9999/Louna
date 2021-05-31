
import {
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
  } from "recharts";
import { useEffect, useState } from 'react';
import Graphe from "./Graphes";

const N = 100
const a = -10
const Der  = () => {

    const x =[]
    const y=[]
    
    for (let i = a; i< N; i++) {
        const element = i;
        x.push(element);    
    }

    for (let i = a; i< N; i++) {
        const element = -2*i**2;
        y.push(element);   
    } 

    const data=[] 
    for (let i = a; i< N; i++) {
        const a = x[i]
        const b =y[i]
        data.push({
            name: a,
            uv: b
        })}
    
    const[nam,setNam]= useState('louna')
    useEffect(()=>{console.log('okk')},[nam])
    const graphique = Graphe(data)
    return ( 
        <div>
            <p>Je m'appelle {nam}</p>
            <button onClick={()=> setNam('loulou')}>nom</button>
        {graphique}
        {y}
        </div> 
        );
}
 


export default Der ;