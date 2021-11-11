//Funciones y Closures.
//Ejercicio 1

a=[1,2,3,4,5,6,7,8,9,10];

function mostrarLista (lista) {
    for (i=0; i<lista.length;) {
        console.log(lista[i]);
        i++;
    }
}

mostrarLista(a);


//Ejercicio 2
(function(){
    let a=[1,2,5];
    function mostrarLista (lista) {
        for (i=0; i<lista.length;) {
            console.log(lista[i]);
            i++;
        }
    }
    mostrarLista(a);
})();

//Ejercicio 3
function crearMultiplicador(numero) {
    return function(numero1) {
        return numero*numero1;
    }
}

result=crearMultiplicador(2);
console.log(typeof result);
console.log(result(1));

function duplicar(num) {
    result=crearMultiplicador(num);
    console.log(result(2));
}
function triplicar(num) {
    result=crearMultiplicador(num);
    console.log(result(3));
}

duplicar(10);
triplicar(20);