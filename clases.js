var Movie = /** @class */ (function () {
    // Definimos el constructor
    function Movie(title, releaYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    // Metodos
    Movie.prototype.printMovieData = function () {
        for (var dato in this) {
            if (typeof this[dato] != "function")
                console.log(dato + ": " + this[dato] + ", " + typeof dato);
        }
    };
    return Movie;
}());
var miPelicula = new Movie("harry potter", 2001, "inglesa", 'ficcion');
miPelicula.printMovieData();
