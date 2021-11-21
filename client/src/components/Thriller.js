import axios from 'axios';
import { useEffect } from 'react';

export default function Thriller(props) {
    useEffect(async () => {
        const genre = {genre: "thriller"};
        let movieList = await axios.post('/genre-specific', genre)
        props.setMovies(movieList.data);
    }, [])
    return (
        <div className="page-intro">Thriller Section</div>
    )
}