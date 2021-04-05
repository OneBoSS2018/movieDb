import React, { useState} from 'react'
import Popular, {apiKey} from "../popular/popular";
import SearchItem  from "./searchFilmItem";
import {Link} from "react-router-dom";
import ChosenButton from "../chosen/chosenButton";
import ChosenList from "../chosen/chosen";
import '../../App.css'
import CurrentGenre from "../genre/genryList";



export  default function SearchMovie({recom, setRecom}) {
    const [name, setName] = useState('')
    const [movie, setMovie] = useState([])




    const onChangeM = (e) =>{
        setName(e.target.value)
        if ( setName && name.length > 0) {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${apiKey}`)
                .then(res => res.json())
                .then(res => {
                        setMovie(res.results)
                    }
                )
        }
    }

    return (
        <div>
            <div className="sContainer">
                < ChosenList  chosen={recom} setChosen={setRecom} />
                    <input
                        type='text'
                        placeholder='Enter movie...'
                        value={name}
                        onChange={onChangeM}
                    />
            </div>
                {(    movie !== undefined && movie.length !== 0   )?
                    (
                        <div className='wrapper'>
                            <div className='box'>
                                {
                                    movie.map(m =>
                                        <div id='item' key={m.id.toString()}>
                                            <Link to={`/${m.id}`} >
                                                < SearchItem title={m.title} poster_path={m.poster_path} genre_ids={m.genre_ids}/>
                                                {m.genre_ids.length === 0 || m.genre_ids.length === undefined ?
                                                    (<strong>Genders: no genre.</strong>) : (<div className='currentG'><strong>Genres:</strong>< CurrentGenre genre_ids={m.genre_ids} /></div>
                                                    ) }
                                            </Link>
                                            {recom.length === 0  ? (<div className='btndiv' >  < ChosenButton  item={m} chosen={recom} setChosen={setRecom} /> </div> ): (
                                                ( recom.some(obj => obj.id === m.id) )    ? (<div className='btndiv'> <button disabled={true} className='buttonAddR' >movie added</button> </div>) : (
                                                    <div className='btndiv' >   < ChosenButton item={m} chosen={recom} setChosen={setRecom}/> </div>)
                                            )}
                                    </div>
                                    )
                                }
                            </div>
                        </div>

                    ): (< Popular recom={recom} setRecom={setRecom} />)}
        </div>
    )
}