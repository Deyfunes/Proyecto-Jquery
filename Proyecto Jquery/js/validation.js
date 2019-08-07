 
$(document).ready(function(){

	 
var validator = $("#formulario").validate({
			errorPlacement: function(error, element){
                $(element).closest("form").find("label[for='"+element.attr("id")+"']").append(error);
                /*Busca los elementos label con el atributo for=element.attr("id") y le agrega un elemento error que este caso seria span*/
			},
			errorElement: "span", messages:{
				
				nom:{
					required: "<br>(Por favor Ingrese su nombre)",
					minlength: "<br>(Debe tener entre 3 y 12 caracteres)"
					},
					
                score:{
					required: "<br>(Por favor Ingrese su nota)",
					minlength: "<br>(Debe tener entre 2 y 3 caracteres)"
                } 
				}
        });

	});