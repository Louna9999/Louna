const nombreAléatoire = (inf,sup) => {
    const écart = sup - inf
    return ( Math.round(Math.random()*écart)+ inf  );
}
 
export default nombreAléatoire;