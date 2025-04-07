function MovieDets  ({ movieDetails, setMovieDetails}){

    return (
        <>
        
        <div key={movieDetails}>
        <h1>Movie Details</h1>
        <p>{movieDetails.Plot}</p>
        <p>{movieDetails.Ratings}</p>
        <p>{movieDetails.BoxOffice}</p>
        <button onClick={() =>setMovieDetails(null) }>Go Back</button>
        </div>

        </>
    )
}

export default MovieDets