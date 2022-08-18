let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');

for(let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for(let emFoco of camposNumericos) {
    validaCampo(emFoco);
}

// if( this.getAttribute('class').match(/erro/)) {
//     return false;
// }

function validaCampo(elemento) {

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value == ''){
            document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento dos campos em vermelho'
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('mensagem').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    });
}

function validaCampoNumerico(elemento) {

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value.match(/\d*/)){
            document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento dos campos em vermelho'
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('mensagem').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    });
}