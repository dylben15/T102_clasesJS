// Paso 1 Definir las variables de entrada y uso interno del algorimo
let nombreCompleto;
let edad;
let genero;
let añoDeNacimiento, añoActual;
let viveNortePais;
let embarazada;
let tieneNueveSemanas;
// Paso 2 Solicitar datos al usuario

nombreCompleto = prompt('Ingrese su nombre completo');
añoDeNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
añoActual = Number(prompt('Ingresa tu año actual'));
genero = prompt('Selecciona tu género: F= Femenino M= Masculino');
viveNortePais = prompt('¿Vives en el norte del país? Respuesta: S o N');

// Paso 3. Desarrollar la lógica en el desarrollo
if(nombreCompleto !== '' && !isNaN(añoDeNacimiento) && !isNaN(añoActual) && viveNortePais !== '' && genero !== ''){
    edad = añoActual - añoDeNacimiento;
    if(edad <18){
        alert(`Lo siento ${nombreCompleto}, aún no eres mayor de edad`);
    }else{
        if(viveNortePais.toUpperCase() == 'S'){
            if(genero.toUpperCase() == 'F'){
                embarazada = prompt('¿Estás embarazada? Respuesta: Si o No');
                if(embarazada.toUpperCase() === 'S'){
                    tieneNueveSemanas = prompt('¿Tienes nueve semanas de gestación? Respuesta: Si o No');
                    if(tieneNueveSemanas.toUpperCase() === 'S'){
                        alert('No puedes vacunarte');
                    }else{
                        alert('Puedes vacunarte');
                    }
                }
            }else{
                alert('Puedes vacunarte papirrin');
            }
        }
    }
    console.log(nombreCompleto);
    console.log(edad);
    console.log(viveNortePais);
    console.log(genero);
}else{
    alert('Te faltaron datos por ingresar inténtalo nuevamente :)');
}