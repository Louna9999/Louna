import {
    FunnelChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Funnel,
    ReferenceArea,
    Tooltip,
    LabelList,
  } from "recharts";

const Tunnel = (data) => {
    return ( 
    
    <FunnelChart width={730} height={250}>
        <Tooltip />
        <Funnel
          dataKey="uv"
          data={data}
          isAnimationActive
        >
          <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
        </Funnel>
      </FunnelChart>
       );
}
 
export default Tunnel;

