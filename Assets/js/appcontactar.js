function contactar(){
    //CAPTURAMOS LOS DATOS ENVIADOS
   let nombre = document.getElementById('nombre').value;
   let correo = document.getElementById('correo').value;
   let mensaje = document.getElementById('mensaje').value;

   if(!nombre ||!correo ||!mensaje){
    alert('uppps... parece que faltan datos');

   }
   else{
    alert('su mensaje ha sido enviado. Pronto nos pondremos en contacto');
   }
  

}