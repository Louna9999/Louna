import nombreAléatoire from './nombreAléatoire';

const couleurAléatoire = () => {
    
    const a = nombreAléatoire(0,255)
    const b = nombreAléatoire(0,255)
    const c = nombreAléatoire(0,255)
    const d = 'rgd(a,b,c)'
    const x=d.replace('a',a)
    const y=x.replace('b',b)
    const z=y.replace('c',c)
    const w=z.replace('d','b')
    return (
       w
      );
}
 
export default couleurAléatoire;