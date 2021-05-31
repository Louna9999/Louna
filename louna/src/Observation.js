import {useState} from 'react';
import Graphe from './Graphes';
import Tableaudefonctions from './tableaudefonctions';
import Barre from './Barre.jsx';
import Fromage from './Pie';
import Tunnel from './Tunnel';

const Observation = (coefficient) => {

    const précision = 0.1
    if (coefficient==null) {
        coefficient=1
    } 
    
    function deuxx (x) {return x}
    function carrée (x) {return x**2}
    function cubee (x) {return x**3}
    const q = Tableaudefonctions(deuxx,précision)
    const s = Tableaudefonctions(Math.sin,précision)
    const e = Tableaudefonctions(Math.exp,précision)
    const ca = Tableaudefonctions(carrée,précision)
    const cu = Tableaudefonctions(cubee,précision)
    const ln = Tableaudefonctions(Math.log,précision)
    const ra = Tableaudefonctions(Math.sqrt,précision)

    const [données,setDonnées]=useState([])

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
        {/* //{barrevide}  */}
        <Barre data={données}/>
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