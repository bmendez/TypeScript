function namefunction (nombre:string) {
	return "Soy" + nombre;
}
var nombre:string = ": Jose Bryan Mendez Moreno";
var edad:number = 25;
var frutas: Array<string> = ['Pera', 'Uva', 'Piña'];
document.getElementById('nameid').innerHTML = namefunction(nombre + ' / Edad: ' + edad);

var a = 5;
var b = 10;

if (a === 5){
	let a = 1;
	var b = 0;
	console.log('Dentro:'+ a + ' - ' + b);
}
console.log('Fuera:'+ a + ' - ' + b);

function devuelveNumero(num:number) {
	return 'Edad:' + num;
}
//var num = 25;
//alert(devuelveNumero(26));

class Coche {
	public color:string;
	public modelo:string;
	public velocidad:number;

	public getColor(){
		return this.color;
	}

	public setColor(color:string){
		return this.color = color;
	}
}

var coche = new Coche();
coche.setColor('Rojo y Negro');
console.log(coche.getColor());
