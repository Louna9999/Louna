import { Link } from "react-router-dom"
import importation from "../importation";

const OMS = () => {
    return ( 
        <div>
            <Link to='/stat/OMS/data0'>Anémie</Link>
            <Link to='/stat/OMS/data1'>Hépatite B</Link>
            <Link to='/stat/OMS/data3'>Santé Mentale</Link>
            {importation()}
        </div>

     );
}
 
export default OMS;