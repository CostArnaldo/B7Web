/*import * as matematica from "./matematica";
// ou import * {somar, subtrair, multiplicar} from "./matematica". Nesse caso voce tem que tirar "matematica do console.log"

let n1: number = 10;
let n2: number = 2;

console.log ("SOMA: " + matematica.somar(n1, n2)) ;
console.log ("SUBTRAÇÃO: " + matematica.subtrair(n1, n2));
console.log ("MULTIPLICAÇÃO: " + matematica.multiplicar(n1, n2));
*/

import { getMaxListeners } from "process";
import validator from "validator";

let name: string = "Arnaldo Costa";

if(validator.isLowercase(name)) {
    console.log("A string " + name + " é toda minúscula.");
}
else {
    console.log("A string " + name + " NÂO é toda minúscula.");
}

console.log(validator.isEmail("arnaldo.ferreira.costa@gmail.com"));

