function namefunction(nombre) {
    return "Soy" + nombre;
}
var nombre = ": Jose Bryan Mendez Moreno";
var edad = 25;
var frutas = ['Pera', 'Uva', 'Piña'];
document.getElementById('nameid').innerHTML = namefunction(nombre + ' / Edad: ' + edad);
var a = 5;
var b = 10;
if (a === 5) {
    var a_1 = 1;
    var b = 0;
    console.log('Dentro:' + a_1 + ' - ' + b);
}
console.log('Fuera:' + a + ' - ' + b);
function devuelveNumero(num) {
    return 'Edad:' + num;
}
//var num = 25;
//alert(devuelveNumero(26));
var Coche = /** @class */ (function () {
    function Coche() {
    }
    Coche.prototype.getsColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        return this.color = color;
    };
    return Coche;
}());
var coche = new Coche();
coche.setColor('Rojo y Negro2');
console.log(coche.getsColor());
