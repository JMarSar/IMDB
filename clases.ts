class Movie{

        // Declaracion de atributos y propiedades
        title:string;
        releaseYear:number;
        //actors: de la clase profesional
        nacionality:string;
        director:string;
        writer:string;
        language:string;
        plataform:string;
        isMCU:boolean;
        mainCharacterName:string;
        producer:string;
        distributor:string;
        genre:string;

        // Definimos el constructor
        constructor(title:string, releaYear:number, nacionality:string, genre:string){
                this.title = title;
                this.releaseYear = releaYear;
                this.nacionality = nacionality;
                this.genre = genre;
        }

        // Metodos
        printMovieData(){ // metodo que muestra todos los datos
                for(let dato in this){
                        if (typeof this[dato] != "function"){
                                console.log(`${dato}: ${this[dato]}, ${typeof dato}`, )
                        }
                }
        }
}

let miPelicula = new Movie("harry potter", 2001, "inglesa", 'ficcion')
miPelicula.printMovieData()