const tri = (data,borne) => {

    const new_data=[]
    data.sort(function(a, b) {
        var keyA = new Date(a.Value),
          keyB = new Date(b.Value);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      for (let i=0;i<data.length;i++){

            if (i<borne||i>data.length-borne-1){
                new_data.push(data[i])
         }
}
    return ( new_data );
}
 
export default tri;