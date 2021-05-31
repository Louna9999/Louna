import {useState} from 'react';
import Long from './Longueur';

const Limites = () => {
    
    const [a, setA] = useState(0)
    const clique = (a) => {setA(Math.random())}
    const x =[]
    const d = 0
    const N =100
    const précision = 0.1
    
    for (let i = d; i< N/précision; i++) {
        const element = i*précision ;
        x.push(element);    
    }
    const l = Long(x)
    return ( 
        
        <div>
        <p>limites</p>

        <p>Décimale aléatoire entre 0 et 1: {a}</p>
        <button onClick={clique}>Numéro assigné</button>
        <p>longueur {l}</p>
        </div>
     );
}
 
export default Limites;