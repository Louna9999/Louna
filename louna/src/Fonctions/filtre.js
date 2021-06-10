const filtreAnnée = (d,année,titre,name,uv) => {
    
    const data = []
    for (let i =0; i<d.fact.length;i++) {
        if (d.fact[i].dims.GHO===titre && d.fact[i].dims.YEAR===année)
        {
            data.push({Country:d.fact[i].dims.COUNTRY,Value:parseFloat(d.fact[i].Value)})
        } 
    }
    return ( 

        data
        
        );

}
 

const filtrePays = (d,pays,titre,name,uv) => {
    const data = []
    for (let i =0; i<d.fact.length;i++) {
        if (d.fact[i].dims.GHO===titre && d.fact[i].dims.COUNTRY===pays)
        {
            data.push({Year:parseFloat(d.fact[i].dims.YEAR),Value:parseFloat(d.fact[i].Value)})
        } 
    }
    return ( 

        data
        
        );

}
 
export {filtrePays,filtreAnnée};