import '../../App.css'

export default function  ChosenButton( {item, chosen, setChosen}){
    const Adder = (e) =>{
        e.preventDefault()
        setChosen([...chosen, {
            id: item.id,
            title: item.title
        }])
    }
    return (
                <button className='buttonAdd'  type={"button"} disabled={false} onClick={Adder}>
                    Add
                </button>
    )
}