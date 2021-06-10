import React, {useState} from 'react';
import {bouton} from '../Fonctions/titres';
import Stat from '../Fonctions/stat';

const TraitementDonnées = (data)=> {
    
    // titres 
    const [titre,setTitre] = useState()

    return (  
        <div className="barre">

            {/* Titres */}
            {bouton(data,titre,setTitre)}
            {Stat(titre,data)}
            
        </div>
    );
}
 
export default TraitementDonnées;