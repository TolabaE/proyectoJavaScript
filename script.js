function talle(numero) {
    if((numero>1)&(numero<21.5)){
        alert("la medida ingresada no pertenece a ninguna talla")
    }
    else if((numero>= 21.6)&(numero<=22.5)){
        console.log("tu talla es 34")
    }
    else if((numero>= 22.6)&(numero<=23.2)){
        console.log("tu talla es 35")
    }
    else if((numero>= 23.3)&(numero<=23.8)){
        console.log("tu talla es 36")
    }
    else if((numero>= 23.9)&(numero<=24.5)){
        console.log("tu talla es 37")
    }
    else if ((numero>= 24.6)&(numero<=25.3)) {
        console.log("tu talla es 38");
    }
    else if ((numero>= 25.4)&(numero<=25.9)){
        console.log("tu talla es 39");
    }
    else if ((numero>= 26)&(numero<=26.5)){
        console.log("tu talla es 40");
    }
    else if ((numero>= 26.6)&(numero<=27.9)){
        console.log("tu talla es 41");
    }
    else if((numero>= 28)&(numero<=28.9)){
        console.log("tu talla es 34")
    }else if(numero>29){
        alert("la medida ingresada excede la talla")
    }
}
let medida;
let resultado;

do {
    medida = parseFloat(prompt(`para su saber talle:\n\n # ingrese la medida de su pie \n # o presione 0 si ya sabe`));

    resultado = talle(medida);
} while (medida!= 0);
console.log(resultado);
