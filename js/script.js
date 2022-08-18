function checarEmail(){
    if( document.forms[0].email.value=="" 
       || document.forms[0].email.value.indexOf('@')==-1 
         || document.forms[0].email.value.indexOf('.')==-1 )
        {
          alert( "Por favor, informe um E-MAIL válido!" );
          return false;
        }
    }