import { useEffect } from "react"

export default function Home(props) {
    useEffect(() => {
        fetch(`/all-movies`)
        .then(response => response.json())
        .then(data => {
            props.setMovies(data);
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div className="page-intro">All Movies Collection</div>
    )
}