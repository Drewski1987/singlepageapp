function MovieDets  ({ movieDetails, setMovieDetails}){

    return (
        <>
        
        <div key={movieDetails.Title}>
        <h1>Movie Details</h1>
        <p>{movieDetails.Plot}</p>
        <p>{movieDetails.Awards}</p>
        <p>Box Office Gross:  {movieDetails.BoxOffice}</p>
        <button onClick={() =>setMovieDetails(null) }>Go Back</button>
        </div>

        </>
    )
}

export default MovieDets