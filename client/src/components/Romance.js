import axios from 'axios';
import { useEffect } from 'react';

export default function Romance(props) {
    useEffect(async () => {
        const genre = {genre: "romance"};
        let movieList = await axios.post('/genre-specific', genre)
        props.setMovies(movieList.data);
    }, [])
    return (
        <div className="page-intro">Romance Genre</div>
    )
}