import axios from 'axios';
import { useEffect } from 'react';

export default function Comedy(props) {
    useEffect(async () => {
        const genre = {genre: "comedy"};
        let movieList = await axios.post('/genre-specific', genre)
        props.setMovies(movieList.data);
    }, [])
    
    return (
        <div className="page-intro">Comedy Section</div>
    )
}