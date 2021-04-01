import  {useEffect,useState} from "react";
import {apiKey} from "../popular/popular";


export  const GenreList = () =>{
     const [list, setlist] = useState({})
     useEffect(()=>{
         fetch(`http://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
             .then(res => res.json())
             .then(res => setlist(res.genres))
             .catch(err => console.log(err))
     }, [setlist])
    return list
}