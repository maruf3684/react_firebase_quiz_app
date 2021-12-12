import { useState ,useEffect } from "react"



export default function useFetch(url,method,headers){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [result, setResult] = useState(null)

    useEffect(() =>{
        async function requestfetch(){
            try{
                setLoading(true);
                setError(false)
                const response=await fetch(url,{
                    method: method || "GET",
                     headers: headers//{Authorization:"563492ad6f91700001000001f8381d4ccd7d4531bff1d48086535f58"},
                });
    
                const data=await response.json();
                setLoading(false)
                setResult(data)

            }catch(err){
            console.log(err);
            setLoading(false)
            setError(err)
            }
        }
        requestfetch()
    },[])

    return{
        loading,
        error,
        result,
    }


}