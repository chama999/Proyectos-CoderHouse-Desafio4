class Contador {
    constructor (nombre,contador) {
        this.nombre=nombre;
        this.contador=contador;
    }
    static contadorGlobal = 0;

    obtenerResponsable() {
        return this.nombre;
    }
    obtenerCuentaIndividual() {
        return this.contador;
    }
    obtenerCuentaGlobal() {
        return Contador.contadorGlobal;
    }

    contar() {
        this.contador++;
        Contador.contadorGlobal++;
    }
}

b=new Contador("Belen",0);
b.contar();
c=new Contador("Carlos",0);
c.contar();
c.contar();
c.contar();
console.log(c.obtenerResponsable()+" tiene " + c.obtenerCuentaIndividual() + ". Cuenta global:" + c.obtenerCuentaGlobal());
d=new Contador("Daniel",0);
d.contar();
d.contar();

console.log(b.obtenerResponsable()+" tiene " + b.obtenerCuentaIndividual() + ". Cuenta global:" + b.obtenerCuentaGlobal());


// lenguaje: Javascript
// función que cuente numeros pares e impares