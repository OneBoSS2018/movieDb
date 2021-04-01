import React, {useEffect, useState} from 'react'
import './App.css'
import SearchMovie from "./compnents/search/search";
import MovieItem  from "./compnents/movie-item/movieItem";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";



function App() {
    const [recom, setRecom] = useState([])

    useEffect(() => {
            getLocalChosen()
        }
        ,[])
    useEffect(()=>{
        saveLocalChosen()
    })

    const saveLocalChosen = () =>{
        localStorage.setItem("mainStore", JSON.stringify(recom))
    }
    const getLocalChosen = () =>{
        if(localStorage.getItem("mainStore") === null){
            localStorage.setItem("mainStore", JSON.stringify([]))
        }else{
            let localka = JSON.parse(localStorage.getItem("mainStore"))
            setRecom(localka)
        }
    }

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact >
                        < SearchMovie recom={recom} setRecom={setRecom} />
                    </Route>
                    <Route path="/:id"  render={props => < MovieItem ide={props.match} setRec={setRecom} rec={recom} />}  />
                </Switch>
            </Router>
        </div>
    )
}

export default App;
