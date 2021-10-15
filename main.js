"use strict";
exports.__esModule = true;
var clases_1 = require("./clases");
var raul = new clases_1.Professional("Raúl", 33, "hombre", 83, 177, "negro", "marrón", "caucásico", false, "España", 0, "piloto de motocross");
var jorge = new clases_1.Professional("Jorge", 20, "hombre", 75, 183, "negro", "marrón", "caucásico", false, "España", 1, "programador");
var guille = new clases_1.Professional("Guille", 19, "hombre", 71, 175, "rubio", "marrón", "caucásico", false, "España", 2, "programador");
var pani = new clases_1.Professional("Pani", 27, "hombre", 83, 176, "castaño", "azules", "caucásico", true, "España", 0, "diseñador");
var actores = [raul, jorge, guille, pani];
for (var _i = 0, actores_1 = actores; _i < actores_1.length; _i++) {
    var actor = actores_1[_i];
    console.log(actor.printAll());
}
var harryPotter = new clases_1.Movie("Harry Potter", 2002, "inglesa", "ficcion");
var avatar = new clases_1.Movie("Avatar", 2012, "eeuu", "ciencia ficcion");
var loImposible = new clases_1.Movie("Lo Imposible", 2015, "española", "Documental");
var movies = [harryPotter, avatar, loImposible];
for (var _a = 0, movies_1 = movies; _a < movies_1.length; _a++) {
    var movie = movies_1[_a];
    console.log(movie.printMovieData());
}
var myImdb = new clases_1.Imdb(movies);
console.log(myImdb);
// Convertir a JSON
//imdbToJson(myImdb)
//jsonToImdb("imdbBBDD.json")
// Probar metodos
myImdb.escribirEnFicheroJSON("imdbBBDD.json");
console.log(myImdb.obternerInstanciaIMDB("imdbBBDD.json"));
