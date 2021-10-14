"use strict";
exports.__esModule = true;
exports.Professional = void 0;
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
