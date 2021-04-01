import React from 'react'
import '../../App.css'
import {Link} from "react-router-dom";



export default function ChosenElement({title, list, setList, l}){
    const deleteListElement = () => {
        setList(list.filter(element => element.id !== l.id ))
    }
    return (
        <div className='menu__item'>

            <Link to={`/${title.split('%').join()}`} >
                <li className='li-hover'>{title}</li>
            </Link>
            <button className='buttonAdd' type={"button"} onClick={deleteListElement}>
                delete
            </button>
        </div>
    )
}