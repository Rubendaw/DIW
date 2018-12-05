$.getJSON( "incidencias", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
	console.log(key);
    items.push( "<li id='" + key + "' class='list-group-item'>" + val.alumne + 
    " " + val.grupo + " " + val.profesor + " " + val.horario + " " + val.data + " " + val.hora + " <a href='bootstrap.html'>Ver Incidencia</a>" + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});
