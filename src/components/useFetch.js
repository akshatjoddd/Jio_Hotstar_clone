import { useState,useEffect } from "react";  
function useFetch(url){ 
    const [movie,setMovie]=useState([])
    useEffect(() => {
        async function data() {
        try {
            const res = await fetch(url)
            const maindata = await res.json()  
            setMovie(maindata.results)
        } catch (err) {
            console.error("Error:", err)
        }
        }
        if (url) {
            data()
        }   
    }, [url])   
    return movie
}  
export default useFetch
    