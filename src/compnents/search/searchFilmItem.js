import React from "react";


export default function  SearchItem(props){
    return (
        <div>
            { props.poster_path === undefined || props.poster_path === null ? (<div>No poster</div>  ) : (
                <img width="100%" alt='' height="100%" src={`https://www.themoviedb.org/t/p/original${props.poster_path}`}/>)}
            <h4>{props.title}</h4>
        </div>
    )
}