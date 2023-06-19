import Notes from '../api/HeaderNotes'
import './custom-styles/Header.css'
import '../styles/App.css'
function Header(){
    let noteNumber = Math.floor(Math.random()* 10)
    let image = `/assets/faceshots/img${noteNumber}.jpg`
    const NoteHeadings = 
        <header>
            <div>
                <img src={image}/>
            </div>
            <div className="copywrite">
                <h1>{Notes[noteNumber].note} </h1>
                <p>{Notes[noteNumber].subtitle} </p>
            </div>
        </header>

    return(
    <div>
        <h1>{NoteHeadings} </h1>
    </div>
    )
}
export default Header