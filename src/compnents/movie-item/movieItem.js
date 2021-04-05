import React, {useEffect, useState} from "react"
import { useHistory} from 'react-router-dom'
import {apiKey} from "../popular/popular";
import ChosenButton from "../chosen/chosenButton";
import '../../App.css'
import SimilarMovie from "../similar-movie/silarMovie";




export  default function MovieItem({ide, rec, setRec}){
    let history = useHistory();
    let back = e => {
        e.stopPropagation();
        history.goBack();
    };
    const  [item, setItem] = useState({})
    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/${ide.params.id}?api_key=${apiKey}`)
            .then(res => res.json())
            .then(res => {
                setItem(res)
            })
    }, [ide])
    const checkUserid = obj => obj.id === item.id;
    return (
         <div  className='aa'>
                <div className='infoDiv' >
                    <div className='infoImg'>
                        { item.poster_path === undefined || item.poster_path === null ? (<div>no poster</div>  ) : (
                            <img  src={`https://www.themoviedb.org/t/p/original${item.poster_path}`} alt=''/>)}
                        {rec.length === 0  ? (< ChosenButton  item={item} chosen={rec} setChosen={setRec} /> ): (
                            ( rec.some(checkUserid) )    ? (<h3>Movie Added</h3>) : (
                                < ChosenButton item={item} chosen={rec} setChosen={setRec}/>)
                        )}
                    </div>
                    <div className='infoSecDiv'>
                        <h1>{item.title}</h1>
                        <strong>Data:</strong>{item.release_date}
                        <h5>Budget: {item.budget}$</h5>
                        <h5>Points: 10/{item.vote_average}</h5>
                        <p>{item.overview}</p>
                            <div>
                                <strong>Genres:</strong>

                            </div>
                        {item.id === undefined ? (<h1>Loading</h1> ) : (
                            <div>
                                {item.genres.length === 0 ?  (<p>no genres</p>) : (item.genres.map(g => <li key={g.id}>{g.name} </li>  ))}
                                < SimilarMovie id={item.id} />
                            </div> )}
                    </div>
                </div>
                     <div>
                         <button className='closeB' type="button" onClick={back}>
                                 back
                         </button>
                     </div>
        </div>
    )
}




