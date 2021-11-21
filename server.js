const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 5000;
const moviesData = {
    romance: [{
            name: "Twilight",
            description: "Romance films or romance movies are romantic love stories recorded in visual media for broadcast in theaters and on TV that focus on passion, emotion, and the affectionate romantic involvement of the main characters.",
            duration: "2hr 45min",
            imdb: "7.8"
        },
        {
            name: "Notebook",
            description: "Romance films or romance movies are romantic love stories recorded in visual media for broadcast in theaters and on TV that focus on passion, emotion, and the affectionate romantic involvement of the main characters.",
            duration: "2hr 45min",
            imdb: "8.8"
        },
        {
            name: "Aashiqui",
            description: "Romance films or romance movies are romantic love stories recorded in visual media for broadcast in theaters and on TV that focus on passion, emotion, and the affectionate romantic involvement of the main characters.",
            duration: "3hr",
            imdb: "7.6"
        },
        {
            name: "Fault in our stars",
            description: "Romance films or romance movies are romantic love stories recorded in visual media for broadcast in theaters and on TV that focus on passion, emotion, and the affectionate romantic involvement of the main characters.",
            duration: "2hr 45min",
            imdb: "9.5"
        },
        {
            name: "A walk to remember",
            description: "Romance films or romance movies are romantic love stories recorded in visual media for broadcast in theaters and on TV that focus on passion, emotion, and the affectionate romantic involvement of the main characters.",
            duration: "2hr 23min",
            imdb: "7.6"
        },
        {
            name: "Passengers",
            description: "Romance films or romance movies are romantic love stories recorded in visual media for broadcast in theaters and on TV that focus on passion, emotion, and the affectionate romantic involvement of the main characters.",
            duration: "2hr",
            imdb: "8.9"
        }
    ],
    thriller: [{
            name: "Red",
            description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that evokes excitement and suspense in the audience. Thriller films' characters conflict with each other or with an outside force, which can sometimes be abstract.",
            duration: "2hr 34min",
            imdb: "6.5"
        },
        {
            name: "MI-2",
            description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that evokes excitement and suspense in the audience. Thriller films' characters conflict with each other or with an outside force, which can sometimes be abstract.",
            duration: "3hr",
            imdb: "7.6"
        },
        {
            name: "Oblivian",
            description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that evokes excitement and suspense in the audience. Thriller films' characters conflict with each other or with an outside force, which can sometimes be abstract.",
            duration: "2hr 45min",
            imdb: "8.7"
        },
        {
            name: "Conjuring",
            description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that evokes excitement and suspense in the audience. Thriller films' characters conflict with each other or with an outside force, which can sometimes be abstract.",
            duration: "2hr",
            imdb: "8.2"
        },
        {
            name: "Sinister",
            description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that evokes excitement and suspense in the audience. Thriller films' characters conflict with each other or with an outside force, which can sometimes be abstract.",
            duration: "1hr 56min",
            imdb: "7.8"
        },
        {
            name: "Death of Me",
            description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that evokes excitement and suspense in the audience. Thriller films' characters conflict with each other or with an outside force, which can sometimes be abstract.",
            duration: "2hr 22min",
            imdb: "6.7"
        },
        {
            name: "Red Dot",
            description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that evokes excitement and suspense in the audience. Thriller films' characters conflict with each other or with an outside force, which can sometimes be abstract.",
            duration: "3hr 02min",
            imdb: "6.5"
        }
    ],
    comedy: [{
            name: "Golmaal",
            description: "Comedy is a genre of film in which the main emphasis is on humour. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect. Films in this style traditionally have a happy ending (black comedy being an exception).",
            duration: "2hr 45min",
            imdb: "6.7"
        },
        {
            name: "The Dictator",
            description: "Comedy is a genre of film in which the main emphasis is on humour. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect. Films in this style traditionally have a happy ending (black comedy being an exception).",
            duration: "1hr 56min",
            imdb: "7.9"
        },
        {
            name: "The Grown Ups",
            description: "Comedy is a genre of film in which the main emphasis is on humour. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect. Films in this style traditionally have a happy ending (black comedy being an exception).",
            duration: "1hr 36min",
            imdb: "6.8"
        },
        {
            name: "Tom and Jerry",
            description: "Comedy is a genre of film in which the main emphasis is on humour. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect. Films in this style traditionally have a happy ending (black comedy being an exception).",
            duration: "3hr 56min",
            imdb: "8.9"
        },
        {
            name: "The Office",
            description: "Comedy is a genre of film in which the main emphasis is on humour. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect. Films in this style traditionally have a happy ending (black comedy being an exception).",
            duration: "3hr 02min",
            imdb: "9.0"
        },
        {
            name: "Do Little",
            description: "Comedy is a genre of film in which the main emphasis is on humour. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect. Films in this style traditionally have a happy ending (black comedy being an exception).",
            duration: "2hr 45min",
            imdb: "9.4"
        }

    ]
}

const whitelist = ['http://localhost:5000/', 'https://fast-wildwood-65721.herokuapp.com/']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/all-movies', (req, res) => {
    let movieList = []
    for (let genre in moviesData) {
        for (let movie of moviesData[genre]) {
            movieList.push(movie);
        }
    }
    res.send(movieList);
})

app.post('/genre-specific', (req, res) => {
    let movieList = moviesData[req.body.genre];
    res.send(movieList);
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
app.listen(port, () => console.log(`server started at port ${port}`));