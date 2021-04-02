import React, {useEffect, useState} from "react"
import {Link, useHistory} from 'react-router-dom'
import {apiKey, CurrentGenre} from "../popular/popular";
import ChosenButton from "../chosen/chosenButton";
import '../../App.css'

function SimilarMovie(id){
     const [ide, setIde] = useState('')
     useEffect(()=> {
         fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`)
             .then(res => res.json())
             .then(res => {
                 setIde(res)
             })
     }, [id])
    return ide.results
}


export  default function MovieItem({ide, rec, setRec}){
    let history = useHistory();
    let back = e => {
        e.stopPropagation();
        history.goBack();
    };
    const  [item, setItem] = useState({})

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/search/movie?query=${ide.params.id}&api_key=${apiKey}`)
            .then(res => res.json())
            .then(res => {
                setItem(res.results[0])
            })
    }, [ide])

    let arr = SimilarMovie(item.id)

    const checkUserid = obj => obj.id === item.id;
    return (
        <>
            <div style={{"marginTop": "20px" }}></div>
                <div className='infoDiv' >
                    <div className='infoImg'>
                        <img  src={`https://www.themoviedb.org/t/p/original${item.poster_path}`} alt=''/>
                        {rec.length === 0  ? (< ChosenButton  item={item} chosen={rec} setChosen={setRec} /> ): (
                            ( rec.some(checkUserid) )    ? (<h3>Movie Added</h3>) : (
                                < ChosenButton item={item} chosen={rec} setChosen={setRec}/>)
                        )}
                    </div>
                    <div>
                        <h1>{item.title}</h1>
                        <strong>Data:</strong>{item.release_date}
                        <h5>Points: 10/{item.vote_average}</h5>
                        <p>{item.overview}</p>
                        {( arr !== undefined) ? (<div>
                            <strong>Genres:</strong>< CurrentGenre genre_ids={item.genre_ids} />
                            {(arr.length === 0) ? (<h1>No similar movie</h1>) : (<h1> similar movie</h1>)}
                            {arr.map(p=>
                                <Link to={`/${p.title.split('%').join()}`} key={p.id}>
                                    <li className='li-hover'>{p.title}</li>
                                </Link>)}
                        </div>) : (<h1>Loading...</h1>) }

                    </div>
                </div>
                     <div>
                         <button className='closeB' type="button" onClick={back}>
                                 Close
                         </button>
                     </div>
        </>
    )
}




