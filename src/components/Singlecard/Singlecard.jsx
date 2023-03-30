import React from 'react';

const Singlecard = ({ movie, handleWatchTime }) => {
    // console.log(handleWatchTime)

    // console.log(movie)
    return (
        <div>
            <div className="movie-cart card text-center w-100 m-auto">
                <div className="movie-poster w-50 m-auto ">
                    <img className='w-75 ' src={movie.poster} alt="" />
                    <h3>{movie.movieName}</h3>
                    <p>{movie.description}</p>
                    <div className="timeAndRating d-flex justify-content-around">
                        <p>Watch Time:{movie.watchTime}</p>
                        <p>Rating:{movie.imdbRating
                        }</p>

                    </div>
                    <button onClick={() => handleWatchTime(movie.watchTime)} className='btn btn-danger w-75 m-auto'>Book now</button>
                </div>
            </div>
        </div>
    );
};

export default Singlecard;