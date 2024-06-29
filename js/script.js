jQuery( document ).ready(function() {
    let curdate = new Date(); 
    let fechaida=curdate.getDay() + "-" + curdate.getMonth() + "-" + curdate.getFullYear();
    let fechavuelta='';
    let clasevuelo='turista';
    let numninios='0';
    let numadultos='1';
    let numbebes='0';
    let tipoboleto='soloida';
    let nombrecompleto='';
    let telefono='';
    let email='';
    console.log( "ready!" );
    let destinos=['Caracas','Barquisimeto','Maracaibo', 'Miami', 'Punta Cana', 'Santo Domingo']
    //write code below
    jQuery("#soloida").click();
    jQuery("#turista").click();
    //funcionamiento básico del controlador de adultos, niños y bebés
    //ADULTOSBOX
    jQuery( "#adultosbox>#minus>button" ).click(function() {
        console.log("minus");
        let valor=jQuery( "#adultosbox>#number>input" ).val();
        console.log("valor:" + valor);

        if(valor==0){
            console.log("Valor 0 no hago nada");
        }
        else{
            valor--;
            numadultos=valor;
            jQuery( "#adultosbox>#number>input" ).val(valor);
        }
    });
    jQuery( "#adultosbox>#plus>button" ).click(function() {
        console.log("minus");
        let valor=jQuery( "#adultosbox>#number>input" ).val();
        console.log("valor:" + valor);
        valor++;
        numadultos=valor;
        jQuery( "#adultosbox>#number>input" ).val(valor);
    });

    //NINIOSBOX
    jQuery( "#niniosbox>#minus>button" ).click(function() {
        console.log("minus");
        let valor=jQuery( "#niniosbox>#number>input" ).val();
        console.log("valor:" + valor);

        if(valor==0){
            console.log("Valor 0 no hago nada");
        }
        else{
            valor--;
            numninios=valor;
            jQuery( "#niniosbox>#number>input" ).val(valor);
        }
    });
    jQuery( "#niniosbox>#plus>button" ).click(function() {
        console.log("minus");
        let valor=jQuery( "#niniosbox>#number>input" ).val();
        console.log("valor:" + valor);
        valor++;
        numninios=valor;
        jQuery( "#niniosbox>#number>input" ).val(valor);
    });

    //BEBESBOX
    jQuery( "#bebesbox>#minus>button" ).click(function() {
        console.log("minus");
        let valor=jQuery( "#bebesbox>#number>input" ).val();
        console.log("valor:" + valor);

        if(valor==0){
            console.log("Valor 0 no hago nada");
        }
        else{
            valor--;
            numbebes=valor;
            jQuery( "#bebesbox>#number>input" ).val(valor);
        }
    });
    jQuery( "#bebesbox>#plus>button" ).click(function() {
        console.log("minus");
        let valor=jQuery( "#bebesbox>#number>input" ).val();
        console.log("valor:" + valor);
        valor++;
        numbebes=valor;
        jQuery( "#bebesbox>#number>input" ).val(valor);
    });

    /////////////////////////////////////////////////////////////////////////////

    //CLASE VUELO
    jQuery('input[name="tipoasiento"]').change(function() {
        console.log(jQuery('input[name="tipoasiento"]:checked').attr("id"));
        let intclasevuelo=jQuery('input[name="tipoasiento"]:checked').attr("id");

        if(intclasevuelo!=''){
            if(intclasevuelo=='ejecutivo'){
                clasevuelo="ejecutivo";
            }
            else{
                clasevuelo="turista";
            }
        }
    });
    //DATEPICKERS
    if(tipoboleto=="soloida"){
        if(jQuery('#vueltabox').is(':visible')){
            jQuery("#vueltabox").hide();
        }
        jQuery("#soloidabox").show();
        jQuery("#datepickerida").datepicker({
            dateFormat: "dd-mm-yy",
            onSelect: function (date) {
                fechaida=date;
                console.log("Fecha IDA:" + fechaida);
            }
        });
    }
    jQuery('input[name="tipoboleto"]').click(function() {
        console.log("***" + jQuery('input[name="tipoboleto"]:checked').attr("id") + "***");
        console.log("***" + tipoboleto + "***");
        if(tipoboleto!=''){
            if(tipoboleto!=jQuery('input[name="tipoboleto"]:checked').attr("id")){
                tipoboleto=jQuery('input[name="tipoboleto"]:checked').attr("id");
            }
            if(tipoboleto=='soloida'){
                if(jQuery('#vueltabox').is(':visible')){
                    jQuery("#vueltabox").hide();
                }
                jQuery("#soloidabox").show();
                jQuery("#datepickerida").datepicker({
                    dateFormat: "dd-mm-yy",
                    onSelect: function (date) {
                        fechaida=date;
                        console.log("Fecha IDA:" + fechaida);
                    }
                });
            }
            else{
                jQuery("#soloidabox").show();
                jQuery("#vueltabox").show();
                jQuery("#datepickerida").datepicker({
                    dateFormat: "dd-mm-yy",
                    onSelect: function (date) {
                        fechaida=date;
                        console.log("Fecha IDA:" + fechaida);
                    }
                });
                jQuery("#datepickervuelta").datepicker({
                    dateFormat: "dd-mm-yy",
                    onSelect: function (date) {
                        fechavuelta=date;
                        console.log("Fecha VUELTA:" + fechavuelta);
                    }
                });
            }
        }
    });

    jQuery('#datepickerida').click(function() {
        let datafecha=jQuery("#datepickerida").datepicker("getDate");
        console.log(datafecha);
    });
    let option;

    for (var i=0;i<destinos.length;i++){
       option += '<option value="'+ destinos[i] + '">' + destinos[i] + '</option>';
    }
    jQuery('#destinossel').append(option);
    jQuery('#origenes').append(option);

    jQuery("#fechaspersinput").click(function() {
        console.log("FECHAS");
        if(tipoboleto!=''){
            if(tipoboleto!='soloida'){
                $( "#fechasfields" ).dialog({
                  title:"Fechas",
                  resizable: false,
                  height: 600,
                  width: 630,
                  modal: true,
                  buttons: {
                    "Hecho": function() {
                        if(fechavuelta!=''){
                            jQuery("#fechaspersinput").html(fechaida + "," + fechavuelta);
                        }
                        else{
                            jQuery("#fechaspersinput").html(fechaida);
                        }
                        $( this ).dialog( "close" );
                    }
                  }
                });
            }
            else{
                $( "#fechasfields" ).dialog({
                  title:"Fechas",
                  resizable: false,
                  height: 600,
                  width: 330,
                  modal: true,
                  buttons: {
                    "Hecho": function() {
                        if(fechavuelta!=''){
                            jQuery("#fechaspersinput").html(fechaida + "," + fechavuelta);
                        }
                        else{
                            jQuery("#fechaspersinput").html(fechaida);
                        }
                        $( this ).dialog( "close" );
                    }
                  }
                });
            }
        }
    });
    
    jQuery("#pasajerospersinput").click(function() {
        console.log("PASAJEROS");
        $( "#pasajerosfields" ).dialog({
          title:"Pasajeros",
          resizable: false,
          height: "auto",
          width: 300,
          modal: true,
          buttons: {
            "Hecho": function() {
                console.log("DONEFECHAS");
                jQuery("#pasajerospersinput").html("Adultos: " + numadultos + ", Niños:" + numninios + ", Bebes:" + numbebes + ", Clase: " + clasevuelo);
                $( this ).dialog( "close" );
            }
          }
        });
    });

    
    jQuery("#datospersinput").click(function() {
        console.log("DATOS");
        $( "#datosfields" ).dialog({
          title:"Datos Personales",
          resizable: false,
          height: "auto",
          width: 300,
          modal: true,
          buttons: {
            "Hecho": function() {
                console.log("DONEDATOS");
                let nombreint=jQuery("#nombreyapellido").val();
                let telefonopint=jQuery("#telefonop").val();
                let correopint=jQuery("#correop").val();
                nombrecompleto=nombreint;
                telefono=telefonopint;
                email=correopint;
                jQuery("#datospersinput").html("Nombre: " + nombreint + ", Correo Electrónico:" + correopint + ", Teléfono:" + telefonopint);
                $(this).dialog("close");
            }
          }
        });
    });

    //ENVIO DE CORREO

    jQuery("#enviardatos").click(function(e) {
        jQuery("#enviardatos").addClass("is-loading");
        let origenint=jQuery('select[name="origenes"]').val() ;
        let destinoint=jQuery('select[name="destinossel"]').val() ;
        let fidaint=fechaida;
        let fvueltaint=fechavuelta;

        var datoscotizacion = {
            nombreyapellido: nombrecompleto,
            telefono: telefono,
            emailpersona:email,
            clase:clasevuelo,
            tipodeticket:tipoboleto,
            adultos:numadultos,
            ninios:numninios,
            bebes:numbebes,
            fechadeida:fechaida,
            fechadevuelta:fechavuelta,
            origen:origenint,
            destino:destinoint
        };

        $.ajax({
            type        : 'POST', 
            url         : "//ready2travelusa.com/wp-admin/admin-ajax.php",
            data        : {
                            action:"enviar_correo_r2tu",
                            datos: datoscotizacion
            },
            dataType    : 'json',
            encode          : true
        }).done(function(data) {
            console.log(data);

            jQuery("#enviardatos").removeClass("is-loading");
            jQuery("#mensaje").html('<div class="notification is-primary"><button class="delete"></button>Su solicitud se ha enviado exitosamente</div>');

        })
        .fail(function(data) {
            console.log(data);
            let respuesta=data.responseText;
            if(respuesta.startsWith("OK")){
                jQuery("#enviardatos").removeClass("is-loading");
                jQuery("#mensaje").html('<div class="notification is-primary"><button class="delete"></button>Su solicitud se ha enviado exitosamente</div>');
            }
            else{
                jQuery("#enviardatos").removeClass("is-loading");
                jQuery("#mensaje").html('<div class="notification is-primary"><button class="delete"></button>Error: No se envió su solicitud, inténtelo de nuevo.</div>');
            }

        })
        e.preventDefault();
    });
});