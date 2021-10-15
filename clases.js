"use strict";
exports.__esModule = true;
exports.nuevaPelicula = exports.jsonToImdb = exports.imdbToJson = exports.Imdb = exports.Movie = exports.Professional = void 0;
var fs = require("file-system");
var rls = require("readline-sync");
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.printAll = function () {
        var resultado = "";
        for (var atributo in this) {
            if (typeof this[atributo] != "function") {
                resultado += atributo + ": " + this[atributo] + " \n";
            }
        }
        return resultado;
    };
    return Professional;
}());
exports.Professional = Professional;
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
        var resultado = "";
        for (var dato in this) {
            if (typeof this[dato] != "function") {
                resultado += dato + ": " + this[dato] + " \n";
            }
        }
        return resultado;
    };
    return Movie;
}());
exports.Movie = Movie;
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        fs.writeFileSync(nombreFichero, JSON.stringify(this.peliculas));
    };
    Imdb.prototype.obternerInstanciaIMDB = function (nombreFichero) {
        var aux = fs.readFileSync(nombreFichero);
        aux = JSON.parse(aux);
        var res = new Imdb(aux);
        return res;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
function imdbToJson(objeto) {
    var convert = JSON.stringify(objeto);
    fs.writeFileSync("imdbBBDD.json", convert);
}
exports.imdbToJson = imdbToJson;
function jsonToImdb(ruta) {
    var convert = fs.readFileSync(ruta);
    JSON.parse(convert);
}
exports.jsonToImdb = jsonToImdb;
function nuevaPelicula(movies, imdb, nombreFichero) {
    var title = rls.question("Título de la película: ");
    var releaseYear = parseInt(rls.question("Año de estreno: "));
    var nationality = rls.question("Nacionalidad de la pelicula: ");
    var director = rls.question("Director: ");
    var writer = rls.question("Guionista: ");
    var language = rls.question("Idioma original: ");
    //let isMCU:boolean = rls.question("Es del universo marvel: ")
    var mainCharacterName = rls.question("Nombre del protagonista: ");
    var producer = rls.question("Productor: ");
    var distributor = rls.question("Distribuidor: ");
    var genre = rls.question("Genero: ");
    var newMovie = new Movie(title, releaseYear, nationality, genre);
    newMovie.director = director;
    newMovie.writer = writer;
    newMovie.language = language;
    newMovie.mainCharacterName = mainCharacterName;
    newMovie.producer = producer;
    newMovie.distributor = distributor;
    movies.push(newMovie);
    imdb.peliculas = movies;
    imdb.escribirEnFicheroJSON(nombreFichero);
}
exports.nuevaPelicula = nuevaPelicula;
// title:string, releaseYear:number, actors:Professional, nacionality:string, director:string, writer:string, language:string, plataform:string, isMCU:boolean, mainCharacterName:string, producer:string, distributor:string, genre:string
