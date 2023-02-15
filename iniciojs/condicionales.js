//1
/*
let num1=parseInt(prompt("ingrese su primer numero"));
let num2=parseInt(prompt("ingrese su segundo numero"));
if(num1>num2){
    console.log("el primer numero es mayor al segundo")
}else{
    console.log("el segundo numero es mayor al primero")
}
*/
//2
/*
let num1=parseInt(prompt("ingrese el primer numero"));
let num2=parseInt(prompt("ingrese su segundo numero"));
if(num1===num2){
    console.log("el primer numero es igual al segundo")
}else{
    console.log("los numeros no son iguales");
}
*/
//3
/*
let num1=parseInt(prompt("ingrese el primer numero"));
let num2=parseInt(prompt("ingrese su segundo numero"));
if(num1>num2){
    console.log("el primer numero es mayor al segundo");
}else if(num1===num2){
    console.log("los dos numeros son iguales");
}else{
    console.log("el segundo numero es mas grande que el primero");
}
*/
//4 
/*
let num1=parseInt(prompt("ingrese el primer numero"));
let num2=parseInt(prompt("ingrese el segundo numero"));
let num3=parseInt(prompt("ingrese el tercer numero"));
if((num1<num2)&& (num1<num3)){
    console.log(num1);
}else if((num2<num1)&& (num2<num3)){
    console.log(num2);
}else{
    console.log(num3);
}
*/
//5

/*
const persona1={
    nombre:"Juan",
    edad:45,
    altura:1.70
}
const persona2={
    nombre:"Pablo",
    edad:30,
    altura:1.85
}
if((persona1.edad)>(persona2.edad)){
    console.log(persona1.nombre+" es el mayor")
}else{
    console.log(persona2.nombre+" es el mayor")
}
if((persona1.altura)>(persona2.altura)){
    console.log(persona1.nombre+" es el mas alto")
}else{
    console.log(persona2.nombre+" es el mas alto")
}
*/
//6
/*
let nombreprompt=prompt("ingrese su nombre");
let edad=parseInt(prompt("ingrese su edad"));
let altura= parseInt(prompt("ingrese su altura"));
let vision=prompt("vision(apto o no apto)")
if((edad >= 18)&& (altura>150)&&(vision==="apto")){
    console.log("la persona esta capacitada para conducir")
}else{
    console.log("la persona no esta capacitada para conducir")
}
*/
//7
/*
function entradaEvento(dato1,dato2,dato3){
    let nombre=prompt("ingrese su nombre");
    let pase=prompt("ingrese el tipo de su parte(vip o normal)")
    let entrada=prompt("¿posee entrada?(si o no)")
    let nombreIgual= nombre==="facundo"
    let saldo=prompt("ingrese su saldo")
    if((nombreIgual===true)||(pase==="vip")){
        return alert("tiene el paso libre")
    }else if(entrada==="si"){
        let utilizarEntrada=prompt("Desea utilizar su entrada?")
        if(utilizarEntrada==="si"){
            return alert("Bienvenido")
        }
        }else{
            let comprarEntrada=prompt("Deseas comprar una entrada")
            if(comprarEntrada==="si"){
                if(saldo>=1000){
                    return alert("Usted compro una entrada.Bienvenido")
                }else{
                    return alert("No tienes saldo suficiente para comprar una entrada.Gracias por visitarnos")
                }
            }else{
                return alert("Gracias por su visita")
        }
    }
}
entradaEvento()
*/
//8

let numsec=6;
for(let i=0;i<3;i++){
    let adivinar=parseInt(prompt("adivine un numero desde 1 a 10"))
    if(adivinar<numsec){
        alert("el numero que eligio es menor al secreto")
    }else if(adivinar>numsec){
        alert("el numero que eligio es mayor al secreto")
    }else{
        alert("a adivinado el numero")
        break;
    }
    if(i===2){
        alert("Usted a perdido")
    }
}





//9
/*
function edades(dato){
    let edad=parseInt(prompt("ingrese su edad"))
    if(edad>0 && edad<=12){
        return alert("usted es un infante")
    }else if(edad>=13 && edad<=18){
       return alert("usted es un adolescente")
    }else if(edad>=19 && edad<=45){
       return alert("usted es un  mayor joven")
    }else if(edad>=46 && edad<=99){
       return alert("usted es un anciano")
    }else{
        return alert("En realidad tiene esa edad?")
    }
}
edades();
*/
//10
/*
function ppt (){
    let p1= prompt("jugador uno: ingrese piedra,papel o tijeras");
    let p2=prompt("jugador dos:ingrese piedra,papel o tijeras");
    if(p1==="piedra"||p1==="papel"||p1==="tijeras"&& p2==="piedra"||p2==="papel"||p2==="tijeras"){
        if(p1==="piedra"&&p2==="tijeras"||p1==="papel" && p2==="piedra" ||p1==="tijeras"&&p2==="papel"){
            return alert("el jugador uno a ganado la partida")
        }else if(p2==="piedra"&&p1==="tijeras"||p2==="papel" && p1==="piedra" ||p2==="tijeras"&&p1==="papel"){
            return alert("el jugador dos a ganado la partida")
        }else{
            return alert("Se a empatado la partida")
        }
    }else{
       return alert("Alerta:Se a detectado trampas")
    }
}
//11
let color=prompt("seleccione un color")
switch(color){
    case "blanco"||"negro":
        alert("falta color")
        break;
    case "verde":
        alert("color de la naturaleza")
        break;
    case "azul":
        alert("El color del agua")
        break;
    case "amarillo":
        alert("El color del sol")
        break;
    case "rojo":
        alert("El color del fuego")     
        break;
    case "marron":
        alert("el color de la tierra")   
        break;
    default:
        alert("exelente aleccion,no lo teniamos pensado")    
        break;
}
*/
//12
/*
let numero1= parseInt(prompt("Escriba un numero"))
let numero2= parseInt(prompt("Escriba otro numero"))
let ope=prompt("seleccione una operacion")
    if(ope==="suma"){
        let total= numero1+numero2;
        alert(total);
    }
    else if(ope==="resta"){
        let total=numero1-numero2;
        alert(total);
    }
    else if(ope==="multiplicacion"){
        let total=numero1*numero2;
        alert(total);
    }else if(ope==="divicion"){
        if(numero1===0||numero2===0){
            alert("ERROR")
        }else{
            let total=numero1/numero2;
            alert(total);
        }

    }
*/
/*
let nombre=prompt("ingrese su nombre")
let apellido=prompt("ingrese su apellido")
let dninum=parseInt(prompt("ingrese su DNI"))
let ciudad=prompt("ingrese su ciudad")
let calle=prompt("ingrese la calle en donde vive")
let numDicc=parseInt(prompt("ingrese la altura de su direccion"))

const dni={
    nombre,
    apellido,
    dninum,
    ciudad,
    calle,
    numDicc
}
alert("se a resgistrado con exito")
console.table(dni)
*/