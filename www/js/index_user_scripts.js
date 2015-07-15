(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnBar */
    $(document).on("click", "#btnBar", function(evt)
    {   
        //chama o metodo scan do plugin barcodeScanner
        cordova.plugins.barcodeScanner.scan(
      function (result) {
          //Exibe um alerta com as informações capturadas
          alert("Código lido!\n" +
                "Conteúdo: " + result.text + "\n" +
                "Formato: " + result.format + "\n" +
                "Cancelado: " + result.cancelled);
      }, 
      function (error) {
          //Mensagem de erro caso a captura não seja possivel
          alert("Falha na leitura: " + error);
      }
   );
        
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
