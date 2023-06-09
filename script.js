const resultado = document.querySelector('.result');
const confirmarBtn = document.querySelector('.igual');

function insert( valor ){
    resultado.innerHTML += valor;
}

function clean() {
    resultado.innerHTML = ' ';
}

function backspace() {
    let resultado = document.getElementById('resultado');
    if (resultado.innerHTML) {
        let result = resultado.innerHTML;
        resultado.innerHTML = result.substring(0, result.length - 1);
    }
}    

function confirmar() {
        
        if (resultado.textContent !== 'Erro') {
            resultado.innerHTML = eval(resultado.innerHTML);
        }     
    }    
   




