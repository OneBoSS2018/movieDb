import {apiKey} from "../popular/popular";
import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

export  default function SimilarMovie({id}){
    const [ide, setIde] = useState([])
    useEffect(  ()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`)
            .then(res => res.json())
            .then(res => {
                setIde(res.results)
            })
    }, [id])
    return (
        <div>
            {( ide !== undefined) ? (<div>
                {(ide.length === 0) ? (<h1>No similar movie</h1>) : (<h1> Similar movie</h1>)}
                {ide.map(p =>
                    <Link to={`/${p.title.split('%').join()}`} key={p.id}>
                        <li className='li-hover'>{p.title}</li>
                    </Link>
            )}
            </div>) : (<h1>Loading...</h1>) }
        </div>
    )
}