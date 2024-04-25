import {useState} from "react"
import './searchBar.css'

function searchBar({onsubmit}) {
  const [term, setTerm] = useState ('')

  const handleFormSubmit = (Event) => {
    Event.preventDefault()
    console.log ('Necesitodecirle al componente padre sobre los datos')
    onsubmit(term)
  }
  const handleChange = (Event) => {
    console.log(Event.target.value)
    setTerm(Event.target.value)
  }
  const handleClick = () => {
    onsubmit(term)
  }
  
  return(
    <div className="search-bar">
      <h1>Search Bar </h1>
      <form onSubmit={handleFormSubmit}>
        Confirma tu busqueda: {term}
        <input onChange={handleChange} value={term}/>
        </form>
        <button onClick={handleClick}>Click Me! </button>
        </div>
      )
}
export default searchBar