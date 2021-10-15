"use strict";
exports.__esModule = true;
exports.jsonConverter = exports.Imdb = exports.Movie = exports.Professional = void 0;
var fs = require("fs");
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
    return Imdb;
}());
exports.Imdb = Imdb;
function jsonConverter(objeto) {
    var convert = JSON.stringify(objeto);
    fs.writeFileSync("imbbBBDD.json", convert);
}
exports.jsonConverter = jsonConverter;
