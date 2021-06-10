import React from 'react';
import premierMot from '../Fonctions/premierMot';


// fonction qui va permettre de faire apparaître des boutons pour switcher de type de données ssi il y en a plusieurs
const bouton = (data,titre,setTitre)=>{ 
    for (let k=0; k<10;k++){
        if (data.fact[1].dims.GHO!==data.fact[0].dims.GHO){
    while (data.fact[k].dims.GHO!==data.fact[0].dims.GHO){

    return (<div>
<button onClick={(titre)=>setTitre(data.fact[0].dims.GHO)}>{premierMot(data.fact[0].dims.GHO)}</button>;
<button onClick={(titre)=>setTitre(data.fact[k].dims.GHO)}>{premierMot(data.fact[k].dims.GHO)}</button>
</div>)}}
    else if (data.fact[1].dims.GHO===data.fact[0].dims.GHO){
        return(
        <button onClick={(titre)=>setTitre(data.fact[0].dims.GHO)}>{premierMot(data.fact[0].dims.GHO)}</button>
        )
}
}
    }

function titres (titre,année){

        return(
        <p className="titrestat">
        {titre} in {année}</p>
        )
    
    
} 


export {titres,bouton};