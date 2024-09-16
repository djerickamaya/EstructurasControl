/*
EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
*/

function ejer1(){
    let edad = prompt("Ingresa tu edad");
    edad < 10 ? alert("Usted es menor de edad") : alert("Usted es mayor de edad");
}

/*
EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
*/
function notaFinal(){
    let nombre = prompt("Ingresa tu nombre completo");
    let carnet = prompt("Ingresa el número de tu carnet");
    let examen = prompt("Ingresa la nota de tu examen");
    let tarea = prompt("Ingresa la nota de tu tarea");
    let asistencia = prompt("De los 90 días de clases ¿Cuántos días asististe?");
    let investigacion = prompt("Ingresa la nota de tu investigación")
    let notFinal = 0;
    
    notFinal = ((examen*0.20)+(tarea*0.40)+(((asistencia*100)/90)*0.010)+(investigacion*0.30));
    
    alert("Nombre: " + nombre + " Carnet: " + carnet + " Nota Final: " + notFinal);
}


/*
EJERCICIO 3:

CATEGORIA       AUMENTO
A               15%
B               30%
C               10%
D               20%

Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.

*/


function aumentoSalario(){
    let nombre = prompt("Ingresa tu nombre completo");
    let salario = prompt("Ingresa tu salario");
    let categoria = prompt("Ingresa tu categoria (A, B, C, D)");
    let aumento = 0;
    let sf = 0;

    if(categoria == "A"){
        aumento = (salario * 0.15);
    }else if(categoria == "B"){
            aumento = (salario * 0.30);
            }
            else if(categoria == "C"){
                    aumento = (salario * 0.10);
                    }
                    else if(categoria == "D"){
                            aumento = (salario * 0.20);
                            }
                            else{
                                prompt("Categoria invalida");
                            }
    sf = (parseInt(salario) + aumento);                        
    alert("Nombre: " + nombre + " Categoria: " + categoria + " Salario: " + salario + " Aumento: " + aumento + " Salario Final: " + sf);
}




/*
EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo. 
*/



function numeroMayor(){
    let n1 = prompt("Ingresa el primer número entero");
    let n2 = prompt("Ingresa el segundo número entero");
    let nMayor = 0;
    let nMenor = 0;

    if(n1 > n2){
        alert("El número mayor es: " + n1);
        }
        else if(n2 > n1){
            alert("El número mayor es: " + n2);
        }
        else{
            alert("Los números son iguales: " + n1 + " y " + n2);
        }

}

/*
EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario.
*/
function conocerDescuento(){
    let modeloAuto = prompt("Escriba la letra del auto que seleccionó");

        if(modeloAuto ==="A"){
            alert("El Ford Fiesta tiene un 5% de descuento")
        }
        else if(modeloAuto === "B"){
            alert("El Ford Focus tiene un 10% de descuento")
        }
        else if(modeloAuto === "C"){
            alert("El Ford Escape tiene un 20% de descuento")
        }
        else{
            alert("Seleccione una letra mayúscula correcta")
        }
}


/*
EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%.
*/
function descuentoPorDestino(){
    let modeloAuto = prompt("Escriba la letra del destino que selecciono");

        if(modeloAuto ==="A"){
            alert("Para La Costa del Sol su descuentoes de 5% ")
        }
        else if(modeloAuto === "B"){
            alert("Para Panchimalco su descuentoes de 10%")
        }
        else if(modeloAuto === "C"){
            alert("Para Puerto el Triunfo su descuentoes de 15%")
        }
        else{
            alert("Seleccione una letra mayúscula correcta")
        }
}

/*
EJERCICIO 7:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.

*/
function numeros(){
    let array = []; // Aquí se almacenan los numeros ingresados para manipularlos
    let vNegativos = 0; //Almacena los numeros negativos
    let vPositivos = 0; //Almacena los numeros positivos
    let mQuince = 0; //Almacena los numeros multiplos de 15
    let sPares = 0; //Se acumularan los numeros pares

    //Se piden los 10 numeros y se almacenan en el array
    for (let i = 0; i <= 9; i++){
        let numero = prompt("Escriba un número entero positivo o negativo")
        array.push(numero);
    }

    //Se recorre el array y se evalua para cada pregunta, si es verdadero entra y hace el proceso segun sea el caso
    for (let i = 0; i <= array.length; i++){
        
        if (array[i] < 0){
            vNegativos = vNegativos + 1;
        }
        if (array[i] > 0){
            vPositivos = vPositivos + 1;
        }
        if (array[i] % 15 == 0){
            mQuince = mQuince + 1;
        }
        if (array[i] % 2 == 0){
            sPares = sPares + parseInt(array [i]); //Se usa el (pareseInt) para convertir el string a int
        }
    }

    //Momento de mandar a imprimir los resultados
   alert("Los números que ingreso son: " + array);
   alert("Los números Negativos que ingeso son: " + vNegativos);
   alert("Los números Positivos que ingeso son: " + vPositivos);
   alert("Los números Multiplos de 15 que ingeso son: " + mQuince);
   alert("Los números Pares que ingeso son: " + sPares);
    
    
}



/*
EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.
*/
function tablaM(){

    let tabla =parseInt( prompt("Ingresa un número del 1 al 10"));
    let multiplicado = 0;

    for (let i = 1; i <= 10; i++){
        multiplicado = tabla * i;
        alert(tabla + " x " + i + " = " + multiplicado);
    }

}


/*
EJERCICIO 9:
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”
*/

function temperatura(){
let celsius = parseInt( prompt("Ingrese la temperatura en grados Celsius"));
let Fahrenheit = ((celsius * 9 / 5)+32);

    if (Fahrenheit <= 14){
        alert("Temperatura para congelar:  " + Fahrenheit + "°  Fahrenheit");
    }
        else if (Fahrenheit > 14 && Fahrenheit <= 32){
            alert("Temperatura baja:  " + Fahrenheit + "°  Fahrenheit");
        }
            else if (Fahrenheit > 32 && Fahrenheit <= 68){
                alert("Temperatura adecuada:  " + Fahrenheit + "°  Fahrenheit");
            }
                else if (Fahrenheit > 68 && Fahrenheit <= 96){
                    alert("Temperatura alta:  " + Fahrenheit + "°  Fahrenheit");
                }
                    else if (Fahrenheit > 96 ){
                        alert("Temperatura fuera de control:  " + Fahrenheit + "°  Fahrenheit");
                    }
                        else{
                            alert("Temperatura desconocida");
                        }

}


/*
EJERCICIO 10:
Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche. 

Nota: Las edades de cada estudiante se deberán ingresar por la web.

Lo que queremos devolver:

• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor.
*/

function turnos(){

        let mañana = [];
        let tarde = [];
        let noche = [];
        let promedio = [];

        let sumaEdadMaña = 0;
        let sumaEdadTarde = 0;
        let sumaEdadNoche = 0;

        let promedioMañana = 0;
        let promedioTarde = 0;
        let promedioNoche = 0;
        let promedioMayor = 0;

        for (let i = 0; i <= 4; i++){
            let edadMañana = parseInt(prompt("Ingrese las edades de los 5 estudiantes del turno de la mañana"));
            mañana.push(edadMañana);
            sumaEdadMaña = sumaEdadMaña + mañana[i];
        }
            promedioMañana = sumaEdadMaña / 5;
            alert("El promedio de los alumnos del turno de la mañana es: " + promedioMañana);
        
        for (let i = 0; i <= 5; i++){
            let edadTarde = parseInt(prompt("Ingrese las edades de los 6 estudiantes del turno de la tarde"));
            tarde.push(edadTarde);
            sumaEdadTarde = sumaEdadTarde + tarde[i];
        }
            promedioTarde = sumaEdadTarde / 6;
            alert("El promedio de los alumnos del turno de la tarde es: " + promedioTarde);

        
        for (let i = 0; i <= 10; i++){
            let edadNoche = parseInt(prompt("Ingrese las edades de los 11 estudiantes del turno de la noche"));
            noche.push(edadNoche);
            sumaEdadNoche  = sumaEdadNoche + noche[i];
        }
            promedioNoche = sumaEdadNoche / 11;
            alert("El promedio de los alumnos del turno de la noche es: " + promedioNoche);

        promedio.push(promedioMañana);
        promedio.push(promedioTarde);
        promedio.push(promedioNoche);


        alert(promedio);

        promedioMayor = Math.max(promedio[0,1,2]);

       alert("El promedio mayor de los tres turnos es: " + promedioMayor);
        
    }