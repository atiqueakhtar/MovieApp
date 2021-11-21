import { useNavigate } from "react-router";
import axios from 'axios';

export default function Search(props) {
    const navigate = useNavigate();
    let searchList = [];
    const changeHandler = async (e) => {
        if(e.target.value == ""){
            navigate('/');
            let movieList = await axios.get('/all-movies')
            props.setMovies(movieList.data);
        }
        else {
            for(let movie of props.movies){
                if(movie.name.toLowerCase().includes(e.target.value.toLowerCase())){
                    searchList.push(movie);
                }
            }
            props.setMovies(searchList);
        }
    }
    return (
        <input className="search" onChange={changeHandler} placeholder="Search..." />
    )
}