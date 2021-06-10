import {
    BarChart,
    XAxis,
    YAxis,
    // CartesianGrid,
    Bar,
    // ReferenceArea,
    Tooltip,
    // Legend
  } from "recharts";
import React from 'react';
import couleurAléatoire from "../../Fonctions/couleurAléatoire";
import {useState} from 'react';
  
const Barre = (data,x,y) => {
    const [couleur,setCouleur] = useState(couleurAléatoire())
    return ( 
        <div className="barre">
            {/* <p>Je suis là</p>
    <pre>{data && data.length>0 && data.map(d=>d.name)}</pre> */}
    <BarChart width={800} height={300} data={data}>
        <Bar dataKey={y} dot={false} fill={couleur} />
        <XAxis type='category' dataKey={x} interval={0} />
        <Tooltip/>
        <YAxis type="number"  allowDataOverflow="true"/>
    </BarChart> 
    <button onClick={couleur=>setCouleur(couleurAléatoire())}>Changer de couleur</button>
    <input type="text" required value={couleur} onChange={c=>setCouleur(c.target.value)} />
    </div>
    );
}
 
export default Barre ;