"use strict";
/*import * as matematica from "./matematica";
// ou import * {somar, subtrair, multiplicar} from "./matematica". Nesse caso voce tem que tirar "matematica do console.log"

let n1: number = 10;
let n2: number = 2;

console.log ("SOMA: " + matematica.somar(n1, n2)) ;
console.log ("SUBTRAÇÃO: " + matematica.subtrair(n1, n2));
console.log ("MULTIPLICAÇÃO: " + matematica.multiplicar(n1, n2));
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
let name = "Arnaldo";
if (validator_1.default.isLowercase(name)) {
    console.log("A string " + name + " é toda minúscula.");
}
else {
    console.log("A string " + name + " NÂO é toda minúscula.");
}
console.log(validator_1.default.isEmail("arnaldo.ferreira.costa@gmail.com"));
