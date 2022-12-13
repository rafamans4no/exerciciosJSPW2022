window.onload =function(){
    let nomeFora = document.getElementById("nome");
    nome.focus();
   }
   //nomeada
   function campoNome(){
       let nome = document.getElementById("nome");// referencia html
       let campoOb = document.getElementsByTagName("span");// array
   
   
       if(nome.value.length == 0){
           campoOb[0].style.color="red";
           campoOb[0].innerHTML="*";
           nome.focus();
           //return false;
       }else{
           campoOb[0].innerHTML="";
           
       }
   
   }
   
   function campoNomeChange(){
      let nome = document.getElementById("nome");
      let campoOb = document.getElementsByTagName("span");
      if(nome.value.length < 3){
           campoOb[0].style.color="red";
           campoOb[0].innerHTML="*";
      }else{
           campoOb[0].innerHTML="";
      }
    }
   
   
   function campoCpf(){
       let icpf = document.getElementById("icpf");
       let campoOb = document.getElementsByTagName("icpf"); 
       alert(icpf.value);
       console.log(icpf.value);
   }



//MASCARA CPF 
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



// MASCARA TELEFONE 
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }