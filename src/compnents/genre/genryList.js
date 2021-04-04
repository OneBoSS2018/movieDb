import { useState, useEffect} from "react";


export default function CurrentGenre(props) {
    const [list, setlist] = useState([])

    useEffect(()=>{
        let isF = false
        try {
            fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=884fb462c33685921cb1b2e54ca679f7`)
                .then(res => res.json())
                .then(res => {
                    if (!isF) {setlist(res.genres)
                }
            })
        }catch (e){
            console.log(e)
        }
        return () => isF = true
    }, [])

    let full = []

    for(let i=0;i<list.length;i++){
        props.genre_ids.forEach(id =>{
            if (list[i].id === id){
                full.push(list[i].name)
                full.push('; ')
            }
        })
    }

    return full
}