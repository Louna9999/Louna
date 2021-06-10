import {filtrePays, filtreAnnée} from '../Fonctions/filtre';
import paysAléatoire from '../Fonctions/paysAléatoire';
import annéeAléatoire from '../Fonctions/annéeAléatoire';
import tri from '../Fonctions/tri';
import Barre from '../Components/Composants/Barre';
import React, {useState} from 'react';
import {titres} from '../Fonctions/titres';

const Stat=(titre,data)=> {

    // statistiques par pays
    const [pays,setPays] = useState("Afghanistan")
    const pays_filtré = filtrePays(data,pays,titre)
    const stat_pays = Barre(pays_filtré,"Year","Value")
    const change_pays = paysAléatoire(data)

    // statistiques par année
    const [bornes,setBornes]= useState(5)
    const [année, setAnnée]= useState ("2019")
    const année_filtrée = filtreAnnée(data,année,titre)
    const stat_année = Barre(tri(année_filtrée,bornes),"Country","Value")
    const change_année = annéeAléatoire(data)

    if (typeof(titre)!=='undefined'){

    return (
    <div>
    {/* Pays */}
            
    {titres(titre,pays)}
    <button onClick={(pays)=>setPays(change_pays)}>Pays aléatoire</button>
    <input type="text" required value={pays} onChange={(e)=>setPays(e.target.value)} />
    {stat_pays}

    {/* Année */}
    
    
    {titres(titre,année)}
    <button onClick={(année)=>setAnnée(change_année)}>Année aléatoire</button>
    <input type="number" required value={année} onChange={(e)=>setAnnée(e.target.value)} />

    {stat_année}
    <p className="entre">Nombre de pays avec les taux les plus extrêmes</p>
    <p>
    <input type="number" required value={bornes} onChange={(e)=>setBornes(e.target.value)} />
    </p>
    </div>
    )
    }
}

export default Stat;