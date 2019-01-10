var incidenciaId = window.location.href.split("?")[1];
console.log(incidenciaId);

$.getJSON( "incidencias/"+incidenciaId, function( data ) {
    
      $.each( data, function( key, val ) {
        console.log(key + ".." +val);
        
        //Prubes en casa //No funciona porque no vale, tengo que almacenar los datos del primer html en el segundo html
        //host google.es
        
        //var campo= document.getElementsByName(key)[0].value;
        if(document.getElementsByName(key)[0]!= undefined){
          let el = document.getElementsByName(key)[0];
          if (el.type && el.type === 'checkbox'){
            console.log(" ** Es un checkbox "+el);
            console.log(" El valor es : "+ val+ " <---");
            document.getElementsByName(key)[0].checked=val;
          }else{
            document.getElementsByName(key)[0].value = val;
          }

        }
       
        
       // campo.value  = val;

      console.log(val);

      
  
    });

  });
