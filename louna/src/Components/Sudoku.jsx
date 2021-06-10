import tabSudoku from '../Fonctions/tabSudoku';
const Sudoku = () => {

    // const lignes = []

    // const vide = []
    // for (let i = 0;i<9;i++){
    //     vide.push(i+1)
    // }

    // for (let i = 0;i<9;i++){
    //     lignes.push(vide)
    // }

    const lignes=[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]
    

    
    



    console.log(tabSudoku(lignes))

    return (
        <div>
        {/* {tab()} */}
        </div>
     );
}

export default Sudoku;