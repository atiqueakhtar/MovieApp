export default function Card(props) {
    let movies = props.movies.map((currMovie) => {
      return (
        <div className="card-container">
          <h2 className="card-header">{currMovie.name}</h2>
          <div className="card-desc">{currMovie.description}</div>
          <h4>
            Duration: {currMovie.duration} <br/> IMDB: {currMovie.imdb}
          </h4>
        </div>
      );
    });
    return <div className="movies-container">{movies}</div>;
  }