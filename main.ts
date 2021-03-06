import { Professional, Movie, Imdb, imdbToJson, jsonToImdb, nuevaPelicula } from './clases';

let raul = new Professional("Raúl", 33, "hombre", 83, 177, "negro", "marrón", "caucásico", false, "España", 0, "piloto de motocross");
let jorge = new Professional("Jorge", 20, "hombre", 75, 183, "negro", "marrón", "caucásico", false, "España", 1, "programador");
let guille = new Professional("Guille", 19, "hombre", 71, 175, "rubio", "marrón", "caucásico", false, "España", 2, "programador");
let pani = new Professional("Pani", 27, "hombre", 83, 176, "castaño", "azules", "caucásico", true, "España", 0, "diseñador");

let actores = [raul, jorge, guille, pani];

for(let actor of actores){
    console.log(actor.printAll()) ;
}

let harryPotter = new Movie("Harry Potter", 2002, "inglesa", "ficcion")
let avatar = new Movie("Avatar", 2012, "eeuu", "ciencia ficcion")
let loImposible = new Movie("Lo Imposible", 2015, "española", "Documental")

let movies = [harryPotter, avatar, loImposible]

for(let movie of movies){
    console.log(movie.printMovieData()) ;
}

let myImdb = new Imdb(movies)
console.log(myImdb)

// Convertir a JSON
//imdbToJson(myImdb)

//jsonToImdb("imdbBBDD.json")

// Probar metodos
let nombreFichero = "imdbBBDD.json"

myImdb.escribirEnFicheroJSON(nombreFichero)
//console.log(myImdb.obternerInstanciaIMDB(nombreFichero))

// Insertar nueva pelicula por consola
nuevaPelicula(movies, myImdb, nombreFichero)
//console.log(myImdb.obternerInstanciaIMDB(nombreFichero))