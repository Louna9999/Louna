import nombreAléatoire from './nombreAléatoire';
const tabSudoku = (ligne) => {

    const lignes =[[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]]
    
    for (let i = 0;i<lignes.length; i++){
        for(let j=0;j<lignes.length;j++){
            let l = 0
            if ((i+j)<lignes.length && i!==0){
                while (lignes[i+j][0]===lignes[j][0]&& l<2000){
                    lignes[i][0]= nombreAléatoire(1,lignes.length)
                    console.log('i')
                    l=l+1
            }
        }}

    }

    
     
    
    return ( lignes );
}
 
export default tabSudoku;