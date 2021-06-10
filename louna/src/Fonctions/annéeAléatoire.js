
import nombreAléatoire from './nombreAléatoire';

const annéeAléatoire = (data) => {
    const indice = nombreAléatoire(0,data.fact.length)
    const année = data.fact[indice].dims.YEAR
    return (année);
}
 
export default annéeAléatoire;