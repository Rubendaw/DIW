var incidenciaId = window.location.href.split("?")[1];
console.log(incidenciaId);

$.getJSON( "incidencias/"+incidenciaId, function( data ) {
    
      $.each( data, function( key, val ) {
        console.log(key + ".." +val);
     
  
    });

  });
