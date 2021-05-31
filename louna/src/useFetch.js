import { useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState (null);
    const [ispending,setIspending] = useState (true)
    const [error, setError] = useState(null);
    useEffect(()=>{
        setTimeout(()=>{fetch(url)
        .then(res=>{
            console.log(res);
            if (!res.ok) {throw Error("Nous n'avons pas pu joindre le serveur de données");
        }
            return res.json();
        })
        .then (data => {setData(data);
        setIspending(false);
        setError(null)
        })
        .catch(err=>{setError(err.message);
            setIspending(false);

        })
        }, 1000); 
    },[url])
    return ( {data, ispending, error}
     );
}
 
export default useFetch;