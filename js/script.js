let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposUf = document.querySelectorAll('input.uf');

for(let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for(let emFoco of camposNumericos) {
    validaCampo(emFoco);
}

for(let emFoco of camposEmail) {
    validaCampo(emFoco);
}

for(let emFoco of camposUf) {
    validaCampo(emFoco);
}

// if( this.getAttribute('class').match(/erro/)) {
//     return false;
// }

function validaCampo(elemento) {
    
    document.getElementById("camposObrigatorios").disabled = true;

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value == ''){
            document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento dos campos em destaque'
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

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, ''): this.value;

        if(numero != '' && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento dos campos em destaque'
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    });
}

function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;
        if(this.value.match(emailValido)){
            document.querySelector('.mensagem').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = 'Verefique o preenchimento dos campos em destaque'
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }



    });   
}

function validaUf(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();
        
        const ufValida = /[^a-zA-Z]/g;
        if(this.value.match(ufValida)){
            document.querySelector('.mensagem').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = 'Verefique o preenchimento dos campos em destaque'
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}