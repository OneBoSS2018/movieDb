import  {useEffect,useState} from "react";


export  const GenreList = () =>{
     const [list, setlist] = useState([])
     useEffect(()=>{
         fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=884fb462c33685921cb1b2e54ca679f7`)
             .then(res => res.json())
             .then(res => setlist(res.genres))
     }, [setlist])
    return list
}