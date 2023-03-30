import React, { useEffect, useState } from 'react';
import Singlecard from '../Singlecard/Singlecard';

const Home = ({ handleWatchTime }) => {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, []);

    return (
        <div>
            <div className="movie-container">
                {
                    movies.map(movie => (
                        <Singlecard handleWatchTime={handleWatchTime} movie={movie}></Singlecard>

                    ))

                }
            </div>
        </div>
    );
};

export default Home;