
    window.onload =function(){
    let nomeFora = document.getElementById("nome");
    nome.focus();
   }
   //nomeada
   function campoNomeChange(){
       let nome = document.getElementById('nome');// referencia html
       let campoOb = document.getElementsByTagName('span');// array
   
   
       if(nome.value.length === 0){
           campoOb[0].style.color="red";
           campoOb[0].innerHTML="Campo obrigatório";
           nome.focus();
       }
      else if(nome.value.length <3){
          campoOb[0].style.color="red";
          campoOb[0].innerHTML="Campo Inválido";
          nome.focus();       
       }
       else{
        campoOb[0].style.color="green";
           campoOb[0].innerHTML="Campo Válido";     
       }


   
   }
   
    function email() { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);


} 
   



function is_cpf (c) {

    if((c = c.replace(/[^\d]/g,"")).length != 11)
      return false
  
    if (c == "00000000000")
      return false;
  
    var r;
    var s = 0;
  
    for (i=1; i<=9; i++)
      s = s + parseInt(c[i-1]) * (11 - i);
  
    r = (s * 10) % 11;
  
    if ((r == 10) || (r == 11))
      r = 0;
  
    if (r != parseInt(c[9]))
      return false;
  
    s = 0;
  
    for (i = 1; i <= 10; i++)
      s = s + parseInt(c[i-1]) * (12 - i);
  
    r = (s * 10) % 11;
  
    if ((r == 10) || (r == 11))
      r = 0;
  
    if (r != parseInt(c[10]))
      return false;
  
    return true;
  }
  
  
  function fMasc(objeto,mascara) {
  obj=objeto
  masc=mascara
  setTimeout("fMascEx()",1)
  }
  
    function fMascEx() {
  obj.value=masc(obj.value)
  }
  
  function mCPF(cpf){
  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return cpf
  }
  
  cpfCheck = function (el) {
      document.getElementById('cpfResponse').innerHTML = is_cpf(el.value)? '<span style="color:green">Válido</span>' : '<span style="color:red">Inválido</span>';
      if(el.value=='') document.getElementById('cpfResponse').innerHTML = '';
  }
   
   function campoCpf(){
       let icpf = document.getElementById("icpf");
       let campoOb = document.getElementsByTagName("span"); 
       alert(icpf.value);
       console.log(icpf.value);
   }
   
   
  
   
 function formulario(){
   let ret = false;
   ret =	campoNome();
   return ret;
    }

  function emailvalida(email){
    const valida = document.querySelector('input#email')
    let span = document.getElementsByTagName('span')
    let radu = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/g
    //Uma expressão regular é uma string (sequência de caracteres) que possui um padrão, por exemplo, endereços de email ou números de telefones.
    //Em JavaScript, as expressões regulares são objetos. O JavaScript fornece o tipo RegExp integrado que permite você trabalhar com expressões regulares de forma eficiente.
    //As expressões regulares são úteis para procurar e substituir strings que correspondem a um padrão. Elas possuem muitas aplicações úteis.

    if(!radu.test(valida.value)){
      span[1].style.color="red";
      span[1].innerHTML=" Email inválido";
    }
    else{
      span[1].style.color="green";
      span[1].innerHTML=" Email válido";
    }
    
  }

    function telefone(){
    const tel = document.querySelector('input#telele')
    let num = tel.value.length;
    let telili = document.getElementsByTagName('span')

    if(num===0){
      tel.value += '('
    }
    if(num===3){
      tel.value += ')'
    }
    else if(num===9){
      tel.value += '-'
    }

  }

  function validatel(){
  const vali = document.querySelector('input#telele')
  let liva = document.getElementsByTagName('span')
  var date = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g

  if(!date.test(vali.value)){
    
  }


  
  
  
  

  }
