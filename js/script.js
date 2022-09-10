function calcularMedia(notas) {
    let soma = 0;
    for (c = 0; c < notas.length; c++){
        soma += notas[c];
    }


media = soma / notas.length

return media;
} 

let media; 

function aprovacao(notas) {
    let media = calcularMedia(notas);

    let condicao = media >= 8 ? 'aprovado' : 'reprovado';

    return 'Media: ' + media + ' - Resultado: ' + condicao;
}

function contagemRegressiva(numero) {

    console.log(numero);

    let proximoNumero = numero -1

    if (numero > 0)
        contagemRegressiva(proximoNumero); // 9 
    
}

// contagemRegressiva(50);

/*
 * Formulário de envio de dados para cálculo da média
 */

document.getElementById('formulario-01').addEventListener('submit', function(evento){

    evento.preventDefault();
    evento.stopPropagation();

    if(this.getAttribute('class').match(/erro/) ){
        return false;
    }

    let dados = new FormData(this);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()) {
        
        // mesmo que passe uma letra para o formulario ele é transformado em 0
        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; 

        if(!isNaN(numero)){
            notas.push(numero);
        }
    
    }

    console.log(notas);

    console.log(objeto);

    document.getElementById('resultado').innerHTML = aprovacao(notas);

});


function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault()

        if(this.value == ""){
        document.querySelector('.mensagem').innerHTML = "Verefique o preenchimento dos campos em vermelho"
        this.classList.add('erro'); // adicionando borda ao erro
        this.parentNode.classList.add('erro');
        return false;
        } else {
        document.querySelector('.mensagem').innerHTML = ""
        this.classList.remove('erro'); // retirando borda 
        this.parentNode.classList.remove('erro');
        }

    });
}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault()

        if(this.value != "" && this.value.match(/[0-9]*/) && this.value >= 0 && this.value <= 10){
            document.querySelector('.mensagem').innerHTML = ""
            this.classList.remove('erro'); // retirando borda 
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "Verefique o preenchimento dos campos em vermelho"
            this.classList.add('erro'); // adicionando borda ao erro
            this.parentNode.classList.add('erro');
            return false;
        }

    });
}


let camposObrigatorios = document.querySelectorAll('input.obrigatorio'); // só vai verificar os campos com a class obrigatorio
let camposNumericos = document.querySelectorAll('input.numero'); // irá verificar os campos com a class numero


for(let emFoco of camposObrigatorios){
    validaCampo(emFoco)
}
for(let emFoco of camposNumericos){
    validaCampoNumerico(emFoco)
}