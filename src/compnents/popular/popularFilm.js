import React from "react";

export default function  FilmMainCard(props)  {
    return (
        <div>
            <img width="100%" height="100%" src={`https://www.themoviedb.org/t/p/original${props.poster_path}`} alt=''/>
            <h4>{props.title}</h4>
        </div>
    )
}