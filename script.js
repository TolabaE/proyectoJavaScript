let totales = 0;
for (let i = 1;i <6; i+= 1){
    let horas = parseInt(prompt("ingrese horas trabajadas por dias"));
    totales += horas;
}
console.log(`por la cantidad de horas trabajadas de lunes a viernes obtienes sueldo de: $ ${totales*600}.`);


