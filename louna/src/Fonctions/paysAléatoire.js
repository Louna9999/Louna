
import nombreAléatoire from './nombreAléatoire';

const paysAléatoire = (data) => {
    const indice = nombreAléatoire(0,data.fact.length)
    const pays = data.fact[indice].dims.COUNTRY
  
    return(pays)
    
}

 
export default paysAléatoire;