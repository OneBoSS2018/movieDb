import ChosenElement from "./chosenElement";
import '../../App.css'


export default function ChosenList({chosen, setChosen}){

    return (
        <div>
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox"/>
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>
            <div className='chosen'>
                <p>Chosen List: {chosen.length} items</p>
            </div>
            <div className='menu__box'>
                <h1>{chosen.length} items</h1>
                {chosen.map(
                    l => < ChosenElement key={l.id} list={chosen} setList={setChosen} l={l} title={l.title}/>
                )}
            </div>
            </div>
        </div>
    )
}
