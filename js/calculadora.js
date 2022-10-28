let operando1;
let operacion;

document.querySelector("#cero").addEventListener('click',()=>entroNumero(0))
document.querySelector("#uno").addEventListener('click',()=>entroNumero(1))
document.querySelector("#dos").addEventListener('click',()=>entroNumero(2))
document.querySelector("#tres").addEventListener('click',()=>entroNumero(3))
document.querySelector("#cuatro").addEventListener('click',()=>entroNumero(4))
document.querySelector("#cinco").addEventListener('click',()=>entroNumero(5))
document.querySelector("#seis").addEventListener('click',()=>entroNumero(6))
document.querySelector("#siete").addEventListener('click',()=>entroNumero(7))
document.querySelector("#ocho").addEventListener('click',()=>entroNumero(8))
document.querySelector("#nueve").addEventListener('click',()=>entroNumero(9))

let resultado=document.querySelector("#resultado");

document.querySelector("#reset").addEventListener('click',borrar);

document.querySelector("#suma").addEventListener('click',()=>calcu("+"));
document.querySelector("#resta").addEventListener('click',()=>calcu("-"));
document.querySelector("#multiplicacion").addEventListener('click',()=>calcu("*"));
document.querySelector("#division").addEventListener('click',()=>calcu("/"));;

document.querySelector("#igual").addEventListener('click',calcular);;





function borrar(){
    resultado.innerHTML="";
}
function entroNumero(n){
    resultado.innerHTML+=n;
}
function calcu(func){
    operando1=resultado.innerHTML;
    operacion=func;
    borrar();
}
function calcular(){
    
    switch (operacion){
        case "+":
            resultado.innerHTML=parseInt(operando1,10)+parseInt(resultado.innerHTML,10);
            break;
        case "-":
            resultado.innerHTML=parseInt(operando1,10)-parseInt(resultado.innerHTML,10);
            break;
        case "*":
            resultado.innerHTML=parseInt(operando1,10)*parseInt(resultado.innerHTML,10);
            break;
        case "/":
            resultado.innerHTML=parseInt(operando1,10)/parseInt(resultado.innerHTML,10);
            break;
        }
}