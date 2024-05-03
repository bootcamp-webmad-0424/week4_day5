import { useState } from "react"

const MoviesNameFilter = ({ filterMoviesByTitle }) => {

    const [titleQuery, settitleQuery] = useState('')

    const handleTitleQuery = event => {
        const { value } = event.target
        settitleQuery(value)
        filterMoviesByTitle(value)
    }

    return (
        <div className="MoviesNameFilter">
            <h2>Filtado</h2>
            <input
                type="text"
                placeholder="Indica el título de una película..."
                value={titleQuery}
                onChange={handleTitleQuery}
            />
        </div>
    )
}

export default MoviesNameFilter