import {
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Bar,
    ReferenceArea,
  } from "recharts";
import React from 'react';
  
const Barre = (data) => {
    console.log(data)
    return ( 
        <div>
            <p>Je suis là</p>
    <pre>{data && data.length>0 && data.map(d=>d.name)}</pre>
    <BarChart width={600} height={300} data={data}>
        <Bar dataKey="uv" dot={false} />
        <CartesianGrid stroke="#ccc" vertical={false} />
        <XAxis allowDataOverflow="true" />
        <YAxis type="number"  allowDataOverflow="true" dataKey="uv" domain ={-2,2}/>
        <ReferenceArea x1={9} x2={40} y1={0} y2={50} />
    </BarChart> 
    </div>
    );
}
 
export default Barre ;