import {
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    ReferenceArea,
  } from "recharts";
  import React from 'react';

  
const Graphe = (data) => {

    return ( 
    
    <LineChart width={600} height={300} data={data}>
        <Line dataKey="uv" dot={false} />
        <CartesianGrid stroke="#ccc" vertical={false} />
        <XAxis allowDataOverflow="true" />
        <YAxis type="number"  allowDataOverflow="true" dataKey="uv"/>
        <ReferenceArea x1={9} x2={40} y1={0} y2={50} />
    </LineChart> 
    
    );
}
 
export default Graphe ;