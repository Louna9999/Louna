import Long from './Longueur';
const Tableaudefonctions = (f,précision) => {

    const x =[]
    const y=[]
    const a = 0.1
    const N =100
    
    for (let i = a; i< N/précision; i++) {
        const element = i*précision ;
        x.push(element);    
    }

    const l = Long(x)


    for (let i = 0; i< l; i++) {
        const element = f(x[i]);
        y.push(element);   
    } 

    const data=[] 
    for (let i = 0; i< l; i++) {
        const a = x[i]
        const b =y[i]
        data.push({
            name: a,
            uv: b
        })}
    return ( 
        data
     );
}
 
export default Tableaudefonctions;