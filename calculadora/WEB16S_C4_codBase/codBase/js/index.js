/*-------------------------------------------------------------------------------*/

function cambiarColorBotonesAccion(elemento){
  elemento.style.background = "#4d62d0";
  if (elemento.children[0]) {
    elemento.children[0].style.background = "inherit";

  }
}

function retornarColorBotonesAccion(elemento){
  elemento.style.background = "#9b9b9b";
  if (elemento.children[0]) {
    elemento.children[0].style.background = "inherit";
  }
}

function aumentarTamañoBotonAccion(elemento){
  elemento.style.width = "22%";
  elemento.style.height= "19%";
  if (elemento.children[0]) {
    elemento.children[0].style.background = "inherit";

  }
}

function reducirTamañoBotonAccion(elemento){
  elemento.style.width = "20%";
  elemento.style.height= "17%";
  if (elemento.children[0]) {
    elemento.children[0].style.background = "inherit";
  }
}

function capturarBotonAccion(elemento){
  
  var ls_actual = document.getElementById('display').innerHTML;
  var ls_sumado = elemento.alt;
  var ls_resultado = '';
  var lr_resultado = 0.00;
  var la_operacion_nivel_1 = ['m', 'r', 's'];
  var la_operacion_nivel_2 = ['*', '/'];
  var la_operacion_nivel_3 = ['+', '-'];
  var li_posopeniv1 = 0, li_posopeniv2 = 0, li_posopeniv3 = 0;
  var lb_operador = true;
  var li_idxcar = 0, li_longitudcadena = 0;


  switch (ls_sumado) {
    case 'On':
	  // Elimina todos los elementos del almacenamiento en el navegador
      localStorage.clear();
      ls_resultado = '0';
      break;
    case '=':
	  // Ejecuta la operación registrada en pantalla
      ls_resultado = igual(ls_actual, ls_sumado);
      break;
    case 'r':
      ls_resultado = operadorUnitario(ls_actual, ls_sumado);
      break;
    case 's':
      ls_resultado = operadorUnitario(ls_actual, ls_sumado);
      break;
    case '.':
	  // buscar el simbolo periodo, si ya está no lo deja crear nuevamente.
      ls_resultado = obtenerCadena (la_operacion_nivel_1, la_operacion_nivel_2, la_operacion_nivel_3, ls_actual, ls_sumado);
      li_posopeniv1 = consultaOperadorNivel(la_operacion_nivel_1, ls_resultado) ;
      if (li_posopeniv1 > 0) {
        ls_resultado = ls_resultado.substring(li_posopeniv1+1);
        lb_operador = false;
      }
      li_posopeniv2 = consultaOperadorNivel(la_operacion_nivel_2, ls_resultado) ;
      if (li_posopeniv2 > 0) {
        ls_resultado = ls_resultado.substring(li_posopeniv2+1);
        lb_operador = false;
      }
      li_posopeniv3 = consultaOperadorNivel(la_operacion_nivel_3, ls_resultado) ;
      if (li_posopeniv3 > 0) {
        ls_resultado = ls_resultado.substring(li_posopeniv3+1);
        lb_operador = false;
      }

      li_idxcar = consultaPunto(ls_resultado, ls_sumado);
      if (!lb_operador || li_idxcar == 0 ) {
        ls_resultado = ls_actual + ls_sumado;
      } else {
        ls_resultado = ls_actual;
      }
      break;
    default:
      li_longitudcadena = ls_actual.length;
      if (li_longitudcadena == 1 && ls_actual == '0') {
        ls_actual = "";
      }

      if (li_longitudcadena > 7) {
        ls_resultado = ls_actual;
      } else {
        ls_resultado = ls_actual + ls_sumado;		  
	  }

      break;
  }

  document.getElementById('display').innerHTML = ls_resultado;
}

// Función que permite cambiar el tamaño de las teclas.
function cambiaTamanioTecla(){
  if (document.images) {
    document.images.logo.width=200;
    document.images.logo.height=200;
  } else {
    logo = document.getElementById("nro1");
    logo.width = 200;
    logo.height = 200; 
  }
}

/*-------------------------------------------------------------------------------*/

var Eventos = {
  init: function(){
    document.onkeypress = this.eventoSonido;
    this.asignarEventosBotones('tecla');
  },
  asignarEventosBotones: function(selector){
    var botonesPagina = document.getElementsByClassName(selector);
    for (var i = 0; i < botonesPagina.length; i++) {
      botonesPagina[i].onmouseover = this.eventoColorBotones;
      botonesPagina[i].onmouseleave = this.eventoRetornarColorBotones;
      botonesPagina[i].onmouseover = this.eventoReducirTamañoBotonAccion;
      botonesPagina[i].onmouseleave = this.eventoAumentarTamañoBotonAccion;
      botonesPagina[i].onclick = this.eventoCapturarBotonAccion;
    }
  },
  eventoColorBotones: function(event){
    cambiarColorBotonesAccion(event.target);
  },
  eventoRetornarColorBotones: function(event){
    retornarColorBotonesAccion(event.target);
  },
  eventoAumentarTamañoBotonAccion: function(event){
    aumentarTamañoBotonAccion(event.target);
  },
  eventoReducirTamañoBotonAccion: function(event){
    reducirTamañoBotonAccion(event.target);
  },
  eventoCapturarBotonAccion: function(event){
    capturarBotonAccion(event.target);
  },
}


Eventos.init();

/*-------------------------------------------------------------------------------*/
