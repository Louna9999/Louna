
import useFetch from './useFetch';
import Der from './derivee';
import Long from './Longueur';
import Tableaudefonctions from './tableaudefonctions';
import Graphe from './Graphes';

const lien = "https://deezer.com"

const Fonc = () => {
    const {data, ispending, error} = useFetch('http://localhost:8000/listessnpm')
    
    const r = [1,2,3,4,5]
    const l = Long(r)
    
    
    return ( 
        
        <div>
            {error && <div>{error}</div>}
            {ispending && <div>Attend</div> }
            <div className="fonctions">
             <a href={lien}>Musique!</a>
             <Der/>
            </div>    
            <p>{l}</p>
        
        </div>  
        
     );
    
}

 
export default Fonc;