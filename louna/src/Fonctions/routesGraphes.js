import { Route } from "react-router";
import TraitementDonnées from "../Components/TraitementDonnées"

function routeGraphes (data,a){
    const dat = "/datan"
    var chemin = "/stat/OMS"
    for (let i = a; i<10; i++){
        var d =dat.replace('n',i)
        chemin += d
       

        if (typeof(data!==undefined)){
            return (
            <Route exact path={chemin}>
            {TraitementDonnées(data)}
            </Route>
            )
            
        }
    }
    

}
export default routeGraphes;