export class Professional {
    public name: string;
    public age: number;
    public genre: string;
    public weight: number;
    public height: number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    public constructor(name: string, age: number, genre: string, weight: number, height: number, hairColor: string,
    eyeColor: string, race: string, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string)
     {
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

    printAll()
    {
        let resultado: string = ""
        for(let atributo in this){
            if(typeof this[atributo] != "function"){
            resultado += `${atributo}: ${this[atributo]} \n`;
            }
        }
        return resultado;
    }
}

export class Movie{

        // Declaracion de atributos y propiedades
        title:string;
        releaseYear:number;
        actors:Professional;
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
                let resultado = ""
                for(let dato in this){
                        if (typeof this[dato] != "function"){
                                resultado += `${dato}: ${this[dato]} \n`
                        }
                }
                return resultado
        }
}

export class Imdb
{
    public peliculas: Movie[]

    public constructor(peliculas: Movie[])
    {
        this.peliculas = peliculas;
    }
}
