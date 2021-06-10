async function importation (b) {
    
    const v =[]
    
    for (let i = 1 ; i < b ; i++){
        const file_ini = "/home/louna_martin/Début/louna/src/json/OMS/data (1).json"
        const file_int = file_ini.replace('A',i)
        const file = file_int.replace('0',i)
        const file = await import ('./json/OMS/data (1).json')
        // import (String(file)).then ((data)=>{v.push(data)}) 
        
    }
    async function a (){
        
        // import (file)
        // .then ((data)=>{console.log(data)}) 
        // console.log(v)
        console.log(file)}
        
        const aa = a()
        console.log(a)
        
    
    return ( v )
        
    
    

    
}
 
export default importation;