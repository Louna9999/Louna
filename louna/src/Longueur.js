const Long = (list) => {

    let l = 0
    let i = 0
     while (typeof (list[i]) == 'number')
        {
            l = i + 1
            i = i + 1
        }
    
    return (
        l
      );
}
 
export default Long;