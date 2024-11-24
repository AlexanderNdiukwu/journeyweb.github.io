
import { useState, useEffect } from 'react';


const useFetch = (url) => {
    



    let [data,setdata] = useState(null)
    let [load,setLoad] = useState(true)
    let [err , setErr] = useState(null )
    
    useEffect(() => {
      fetch(url)
        .then(response => {
          console.log("Response Status:", response.status); 
          if (!response.ok) {
            throw new Error('Failed to disecr movie data');
          }
          return response.json();
        })
        .then(data => {
          setdata(data);
          setLoad(false);
        })
        .catch(err => {
          console.error("Caught mono error:", err);
          setLoad(false)
          setErr(err.message);
        });
    }, [url]);
    
    
    
    
    



  return {data, load , err}
}

export default useFetch