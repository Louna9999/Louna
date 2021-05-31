import {
    PieChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Pie,
    ReferenceArea,
  } from "recharts";
  
const Fromage = (data) => {

    return ( 
    
    <PieChart width={600} height={300} >
        <Pie data={data} dataKey="uv" nameKey="name" />
        
    </PieChart> 
    
    );
}
 
export default Fromage ;