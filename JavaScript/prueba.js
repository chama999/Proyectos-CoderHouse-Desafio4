console.log("Hola mundo!");
let a =5;
let b = 10;
const e=100;
d=5;
console.log(typeof d);
console.log("Imprime 'd' fuera de bloque",d)
function sumar(){
    //e=200; Da error assignmenet to constant variable, porque const no puede ser reasignada
    let a=1;
    let b=2;
    c=a+b;
    d=6;
    if (true){
        console.log(a);
        console.log(b);
        console.log(c);
    }
}
sumar();
console.log("Log fuera de blqoue, Suma de a+b fuera de bloque:",a+b);

console.log(c);
console.log("Imprime 'd' del bloque",d);