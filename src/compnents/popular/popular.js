import React, {useEffect, useState} from "react"
import Pagination from "../pagination/pagination";
import FilmMainCard from "./popularFilm";
import {Link} from "react-router-dom";
import {GenreList} from "../genre/genryList";
import ChosenButton from "../chosen/chosenButton";
import '../../App.css'



export const apiKey = '884fb462c33685921cb1b2e54ca679f7'

export function CurrentGenre(props) {
    const FullGenry = GenreList()
    let full = []

   for(let i=0;i<FullGenry.length;i++){
        props.genre_ids.forEach(id =>{
                if (FullGenry[i].id === id){
                    full.push(FullGenry[i].name)
                    full.push('; ')
                }
            })
        }

    return full
}



export  default function Popular({recom, setRecom}){
    const [popular, setPopular] = useState([])
    const [count, setCount] = useState(1);


    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${count}`)
            .then(res => res.json())
            .then(res => {
                setPopular(res.results)
            })
            .catch(error => console.log(error))
    }, [count])



    return (
             popular.length > 0 ?
                (
                 <div>
                     <div className='wrapper'>
                         <div className='box'>
                             {popular.map( (p) =>
                                     <div id='item'>
                                         <Link to={`/${p.title.split('%').join()}`} key={p.id}>
                                             < FilmMainCard title={p.title} poster_path={p.poster_path}/>
                                             < CurrentGenre genre_ids={p.genre_ids} />
                                         </Link>
                                         {recom.length === 0  ? (< ChosenButton  item={p} chosen={recom} setChosen={setRecom} /> ): (
                                             ( recom.some(obj => obj.id === p.id) )    ? (<h3>Movie Added</h3>) : (
                                                 < ChosenButton item={p} chosen={recom} setChosen={setRecom}/>)
                                         )}
                                     </div>
                             )}
                         </div>
                     </div>
                     <div className='pagin'>
                         < Pagination p={count} setP={setCount} />
                     </div>
                 </div>
                    ) : (
                    <div>Loading...</div>
                )
    )

}





