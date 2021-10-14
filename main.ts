import { Professional } from "./clases";

let raul = new Professional("Raúl", 33, "hombre", 83, 177, "negro", "marrón", "caucásico", false, "España", 0, "piloto de motocross");
let jorge = new Professional("Jorge", 20, "hombre", 75, 183, "negro", "marrón", "caucásico", false, "España", 1, "programador");
let guille = new Professional("Guille", 19, "hombre", 71, 175, "rubio", "marrón", "caucásico", false, "España", 2, "programador");
let pani = new Professional("Pani", 27, "hombre", 83, 176, "castaño", "azules", "caucásico", true, "España", 0, "diseñador");

let actores = [raul, jorge, guille, pani];

for(let actor of actores){
    console.log(actor.printAll()) ;
}