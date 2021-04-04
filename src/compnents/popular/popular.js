import React, {useEffect, useState} from "react"
import Pagination from "../pagination/pagination";
import FilmMainCard from "./popularFilm";
import {Link} from "react-router-dom";
import ChosenButton from "../chosen/chosenButton";
import '../../App.css'
import CurrentGenre from "../genre/genryList";



export const apiKey = '884fb462c33685921cb1b2e54ca679f7'




export  default function Popular({recom, setRecom}){
    const [popular, setPopular] = useState([])
    const [count, setCount] = useState(1);


    useEffect(()=> {
        let isF = false
        try {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${count}`)
                .then(res => res.json())
                .then(res => {
                    if (!isF) {setPopular(res.results)}
                })
        }catch (e){
            console.log(e)
        }
        return ( ) => {
            isF = true
        }
    }, [count])



    return (
             popular.length > 0 ?
                (
                 <div>
                     <div className='wrapper'>
                         <h1>Popular</h1>
                         <div className='box'>
                             {popular.map( (p) =>
                                     <div id='item' key={p.id.toString()} >
                                         <Link to={`/${p.title.split('%').join()}`} key={p.id}>
                                             < FilmMainCard title={p.title} poster_path={p.poster_path}/>
                                             { p.genre_ids === null ? (<p>loading...</p> ): (<div className='currentG'><strong>Genres:</strong>< CurrentGenre genre_ids={p.genre_ids} /></div>)}
                                         </Link>
                                         {recom.length === 0  ? (<div className='btndiv'> < ChosenButton  item={p} chosen={recom} setChosen={setRecom} /> </div>): (
                                             ( recom.some(obj => obj.id === p.id) )    ? (<div className='btndiv'> <button disabled={true} className='buttonAddR' >movie added</button> </div>) : (
                                                 <div className='btndiv'>< ChosenButton  item={p} chosen={recom} setChosen={setRecom}/></div>)
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





