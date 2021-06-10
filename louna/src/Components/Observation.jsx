import {useState} from 'react';
import Graphe from './Composants/Graphes';
import tableauDeFonctions from '../Fonctions/tableaudefonctions';
import Barre from '/home/louna_martin/Début/louna/src/Components/Composants/Barre.jsx';
import Fromage from './Composants/Pie';
import Tunnel from './Composants/Tunnel';
import React from 'react';

const Observation = (coefficient) => {

    const précision = 0.5
    if (coefficient==null) {
        coefficient=1
    } 
    
    function deuxx (x) {return x}
    function carrée (x) {return x**2}
    function cubee (x) {return x**3}
    const q = tableauDeFonctions(deuxx,précision)
    const s = tableauDeFonctions(Math.sin,0.1)
    const e = tableauDeFonctions(Math.exp,précision)
    const ca = tableauDeFonctions(carrée,précision)
    const cu = tableauDeFonctions(cubee,précision)
    const ln = tableauDeFonctions(Math.log,précision)
    const ra = tableauDeFonctions(Math.sqrt,précision)

    const [données,setDonnées]=useState([{name:1,uv:1}])

    const graphevide = Graphe (données)
    const lineaire = (données) => {setDonnées(q)}
    const sin = (données) => {setDonnées(s)}
    const exp = (données) => {setDonnées(e)}
    const carré = (données) => {setDonnées(ca)}
    const cube = (données) => {setDonnées(cu)}
    const racine = (données) => {setDonnées(ra)}
    const logn = (données) => {setDonnées(ln)}
    const barrevide = Barre (données)
    const fromagevide = Fromage(données)
    const tunnelvide = Tunnel(données)

    return ( 
        
        <div>
    
        {graphevide}
        {barrevide} 
        {fromagevide}
        {tunnelvide}
        <button onClick={lineaire}>Linéaire</button>
        <button onClick={carré}>Carrée</button>
        <button onClick={cube}>Cube</button>
        <button onClick={sin}>Sinus</button>
        <button onClick={exp}>Exponentielle</button>
        <button onClick={logn}>Logartihme néperien</button>
        <button onClick={racine}>Racine</button>

        </div>

     );
}
 
export default Observation;