import { useState } from "react"

function NewMovieForm({ addNewMovie }) {

    const [title, setTitle] = useState("")
    const [director, setDirector] = useState("")
    const [IMDBRating, setIMDBRating] = useState(5)
    const [hasOscars, setHasOscars] = useState(true)

    const handleTitleChange = event => {
        const { value } = event.target
        setTitle(value)
    }

    const handleDirectorChange = event => {
        const { value } = event.target
        setDirector(value)
    }

    const handleRatingChange = event => {
        const { value } = event.target
        setIMDBRating(value)
    }

    const handleOscarsChange = event => {
        const { checked } = event.target
        setHasOscars(checked)
    }

    const handleMovieSubmit = event => {
        event.preventDefault()              // Evita el envío
        const newMovie = { title: title, director: director, hasOscars: hasOscars, IMDBRating: IMDBRating }
        addNewMovie(newMovie)
    }

    return (
        <div className="NewMovieForm">
            <h4>Add a Movie</h4>

            <form onSubmit={handleMovieSubmit}>
                <label>Título</label>
                <input type="text" value={title} onChange={handleTitleChange} />

                <label>Director</label>
                <input type="text" value={director} onChange={handleDirectorChange} />

                <label>Puntuación</label>
                <input type="number" value={IMDBRating} onChange={handleRatingChange} />

                <label>¿Se llevó Oscars?</label>
                <input type="checkbox" checked={hasOscars} onChange={handleOscarsChange} />

                <input type="submit" value={'Crear película'} />
            </form>

        </div>
    )
}

export default NewMovieForm