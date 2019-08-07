//js document jquery

 
$(document).ready(function(){
     
        var nota = $("#score").val();
        var codigo = $("#code").val();
        var nombre = $("#nom").val();
    

    function estudiante(codigo,nombre,nota){
        codigo = codigo,
        nombre = nombre,
        nota = nota
    }
    var contador;
        if(localStorage.length > 0){
            contador= localStorage.length + 1;
        }else{
            contador= 1;
        }
        $("#code").val(contador);
   
    $("#registrar").click(function(){

        var nota = $("#score").val();
        var codigo = $("#code").val();
        var nombre = $("#nom").val();
    
        var estudiante = {
            codigo:codigo,
            nombre:nombre,
            nota:nota
        };

       
        //nombre  
        if (nombre =="" || isNaN(nombre)==false){
        
            $("#note2").fadeIn();  
         return false;

        }else{
            $("#note2").fadeOut(2000);  

                //nota
            if(nota == ""){
                $("#note3").fadeIn();
                return false;
            }else{
                $("#note3").fadeOut(2000);
            }
    }

    localStorage.setItem(codigo, JSON.stringify(estudiante));
    contador = localStorage.length + 1;
   
    ListarEstudiantes();
    restablecer(9);

});      
   
       //Aqui se define la nota mayor
    $("#high_score").click(function(){
            var notaM = 0; 
            key, data, estudiante;
        for(var i = 0; i<localStorage.length; i++){
                var key = localStorage.key(i);
                var data = localStorage.getItem(key);
                estudiante = JSON.parse(data);
            if(notaM<estudiante.nota){
                notaM=estudiante.nota +' '+estudiante.nombre;
            }
           
        }
        $("#res_notamayor").html(notaM);
        
    });
        
        $("#low_score").click(function(){
             
            var notaMenor = 100;
            var salida = $("#res_notamenor");
            key, data, estudiante;
            for(var i=0; i<localStorage.length;i++){
                var key = localStorage.key(i);
                var data = localStorage.getItem(key);
                var estudiante = JSON.parse(data);
                if(notaMenor > estudiante.nota) {
                    notaMenor = estudiante.nota+" "+estudiante.nombre;//Entonces en el if, la condición será que si el número 
                }//que acaba de entrar es menor que el menor, entonces le asigna el numero menor.
                
            }
            $(salida).html(notaMenor);
    });

        $("#promedio").click(function(){
        
            var promedio = 0;
        
            for(var i=0; i<localStorage.length; i++){
                clave = localStorage.key(i);
                estudiante = $.parseJSON(localStorage.getItem(clave));
                promedio += parseInt(estudiante.nota);
            }
           var res = promedio/localStorage.length; 

            $("#res_promedio").html(res)
    
    });
    //Editar Estudiante
    $("#edit").click(function(){
        Edit();        
    });

    //Eliminar estudiante
    $("#remove").click(function(){
        remove();
    });

$("#mostrarLista").click(function(){
    ListarEstudiantes();
});
    

function restablecer(){
    $("#code").val(contador);
    $("#nom").val("");
    $("#score").val("");
}

});


function ListarEstudiantes(){

    var tabla = "";
    var table = $("#tabla");

    tabla += '<table border="1" class="table col-lg-12 col-md-6">';
    tabla += '<tr class="list-title col-lg-12"><h1 class="col-lg-12">Listado de Estudiante</h1></tr>';
    tabla += '<tr class="panel-heading"><th>Codigo</th><th>Nombre</th><th>Nota</th><th colspan="2">Accion</th></tr>';
    
    for(var i=0; i<localStorage.length; i++){
        var clave = localStorage.key(i);
    var estudiante = $.parseJSON(localStorage.getItem(clave));

   
    tabla += '<tr class="selected"><td class="col-lg-3 text-center">'+ estudiante.codigo +'</td>';
    tabla += '<td class="col-lg-3 text-center">'+estudiante.nombre+'</td>';
    tabla += '<td class="col-lg-2 text-center">'+estudiante.nota+'</td>';
    tabla += '<td class="col-lg-2" id="botons"><button id="edit" onclick="Edit(\'' + estudiante.codigo + '\');">Editar</button></td>';
    tabla += '<td class="col-lg-2" id="botons"><button id="remove" onclick="remove(\'' + estudiante.codigo + '\');">Eliminar</button></td></tr>';

    }
  tabla +='</table>';
$(table).html(tabla);

}
 
function Edit(codigo){
    var estudiante;
    for(var i=0; i<localStorage.length; i++){
        var clave = localStorage.key(i);
        if(clave == codigo){
            estudiante = $.parseJSON(localStorage.getItem(clave));
            $("#code").val(estudiante.codigo);
            $("#nom").val(estudiante.nombre);
            $("#score").val(estudiante.nota);

           
        }
    }

}

function remove(codigo){
    localStorage.removeItem(codigo);
    ListarEstudiantes();
}





