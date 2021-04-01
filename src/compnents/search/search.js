import React, { useState} from 'react'
import Popular, {apiKey, CurrentGenre} from "../popular/popular";
import SearchItem  from "./searchFilmItem";
import {Link} from "react-router-dom";
import ChosenButton from "../chosen/chosenButton";
import ChosenList from "../chosen/chosen";
import '../../App.css'




export  default function SearchMovie({recom, setRecom}) {
    const [name, setName] = useState('')
    const [movie, setMovie] = useState([])


    const search = async () => {
            await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${apiKey}`)
                .then(res => res.json())
                .then(res => {
                        setMovie(res.results)
                    }
                )
        }


    return (
        <div>
            < ChosenList  chosen={recom} setChosen={setRecom} />
            <div className="sContainer">

                <h1>Search Movies</h1>
                <input
                    type='text'
                    placeholder='Enter movie...'
                    value={name}
                    onChange={event => setName(event.target.value)}
                    onKeyPress={search}
                />
            </div>
                {(    movie !== undefined && movie.length !== 0 )?
                    (
                        <div className='wrapper'>
                            <div className='box'>
                                {
                                    movie.map(m =>
                                        <div id='item'>
                                            <Link to={`/${m.title.split(':').join()}`} key={m.id}>
                                                < SearchItem title={m.title} poster_path={m.poster_path} genre_ids={m.genre_ids}/>
                                                {m.genre_ids.length === 0 || m.genre_ids.length === undefined ?
                                                    (<strong>Genders: no genre.</strong>) : (<>
                                                            < CurrentGenre genre_ids={m.genre_ids} />
                                                        </>
                                                    ) }
                                            </Link>
                                            {recom.length === 0  ? (< ChosenButton  item={m} chosen={recom} setChosen={setRecom} /> ): (
                                                ( recom.some(obj => obj.id === m.id) )    ? (<h3>Movie Added</h3>) : (
                                                    < ChosenButton item={m} chosen={recom} setChosen={setRecom}/>)
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