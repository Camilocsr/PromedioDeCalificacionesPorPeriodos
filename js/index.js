// constantes de el formulario de contacto.
const not1 = document.getElementById('not1'); //LLamo el id de html para usarlo en js.
const not2 = document.getElementById('not2'); //LLamo el id de html para usarlo en js.
const not3 = document.getElementById('not3'); //LLamo el id de html para usarlo en js.
const parrafo = document.getElementById('parrafo-formulario'); //LLamo el id de html para usarlo en js.

// constantes segundo form.
const not4 = document.getElementById('not4');//LLamo el id de html para usarlo en js.
const not5 = document.getElementById('not5');//LLamo el id de html para usarlo en js.
const parrafo2 = document.getElementById('parrafo-formulario2');//LLamo el id de html para usarlo en js.

// constantes tres form.
const not6 = document.getElementById('not6');//LLamo el id de html para usarlo en js.
const parrafo3 = document.getElementById('parrafo-formulario3');//LLamo el id de html para usarlo en js.

document.addEventListener('submit', contactactar=>{ // función La cual se encarga de validar los campos del programa y las operaciones matematicas
    contactactar.preventDefault();
    let = entrar = false;
    let = texto = "";
    let Resultado1;
    let Resultado2;
    let Resultado3;
    let rf = 1.5;
    if(not1.value <= 0 || not1.value > 5){
        texto += `El numero de Nota uno debe ser positivo y menor a 5 <br>`;
        entrar = true;
    } else if(not2.value <= 0 || not2.value > 5){
        texto += `El numero de Nota dos debe ser positivo y menor a 5 <br>`;
        entrar = true;
    } else if(not3.value <= 0 || not3.value > 5){
        texto += `El numero de Nota tres debe ser positivo y menor a 5<br>`;
        entrar = true;
    } else if (not4.value <= 0 || not4.value > 5){
        texto += `El numero de Nota cuatro debe ser positivo y menor a 5<br>`;
        entrar = true;
    } else if (not5.value <= 0 || not5.value > 5){
        texto += `El numero de Nota sinco debe ser positivo y menor a 5<br>`;
        entrar = true;
    } else if (not6.value <= 0 || not6.value > 5){
        texto += `El numero de Nota seis debe ser positivo y menor a 5<br>`;
        entrar = true;
    }
    else {
        Resultado1 = ((parseInt(not1.value)+parseInt(not2.value) +parseInt(not3.value))/3)*0.3;
        Resultado2 = ((parseInt(not4.value)+parseInt(not5.value))/2)*0.3;
        Resultado3 = (parseInt(not6.value))*0.4;
        rf = (Resultado1+Resultado2+Resultado3)/3
        if(rf < 3){
            texto += `Su nota final es: <br>` + rf + "  Reprobo.";
        }
        else if(rf > 3){
            texto += `Su nota final es: <br>` + rf + "  Aprobo.";
        }
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML =  texto;
        parrafo2.innerHTML =  texto;
        parrafo3.innerHTML =  texto;
    }
});

function limpiarFormulario() {
    document.getElementById("form").reset();
};