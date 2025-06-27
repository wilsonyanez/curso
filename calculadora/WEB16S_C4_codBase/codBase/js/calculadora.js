/*-------------------------------------------------------------------------------*/

// Clase Stack
class Pila {

    // Un arreglo es usado para implementar la pila
    constructor() {
        this.items = [];
    }

    // Funciones implementadas
    // Push: agrega un elemento a la pila
    push(elemento) {
        // ingresar un elemanto en la pila de items
        this.items.push(elemento);
    }

    // Pop (): elimina un elemento de la pila, si la función se llama en una pila vacía, indica "Underflow"
    pop() {
        // Este método devuelve el elemento superior de la pila y lo elimina. Devuelve el flujo inferior
        // cuando se llama en una pila vacía.
        // retorna "Underflow" si la pila está vacía
        if (this.items.length == 0){
            return "Underflow";
        }
        return this.items.pop();
    }

    // Peek (): devuelve la mayoría de los elementos superiores en la pila, pero no lo elimina.
    peek()
    {
        // Devuelve el elemento superior sin eliminarlo de la pila.
        // pero no lo borra.
        return this.items[this.items.length - 1];
    }

    // isEmpty (): devuelve verdadero si la pila está vacía
    isEmpty()
    {
        // Devuelve verdadero si la pila está vacía.
        return this.items.length == 0;
    }

  //  printStack (): este método devuelve una cadena en la que se concatenan todos los elementos de una pila.
    printStack()
    {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

// Obtener la cadena de ejecución en la pantalla
function obtenerCadena (aa_operacion_nivel_1, aa_operacion_nivel_2, aa_operacion_nivel_3, as_actual, as_sumado) {
  var li_o, ls_o, ls_operador, ls_cadena_tmp, ls_cadena, li_posopeniv1, li_posopeniv2, li_posopeniv3;

//  ls_cadena_tmp = as_actual + as_sumado;
  ls_cadena_tmp = document.getElementById('display').innerHTML;
  li_posopeniv1 = consultaOperadorNivel(aa_operacion_nivel_1, ls_cadena_tmp) ;
  li_posopeniv2 = consultaOperadorNivel(aa_operacion_nivel_2, ls_cadena_tmp) ;
  li_posopeniv3 = consultaOperadorNivel(aa_operacion_nivel_3, ls_cadena_tmp) ;

  li_o = consultarContador();
  if ((li_o >= 1) && !((li_posopeniv1 > 0) || (li_posopeniv2 > 0) || (li_posopeniv3 > 0))) {
    ls_operador = consultarOperador();
    ls_o = consultarOperando();
    ls_cadena = ls_cadena_tmp + ls_o + ls_operador;
  } else {
    ls_cadena = ls_cadena_tmp;
  }

  return ls_cadena ;
}

function igual (as_actual, as_sumado) {

  var la_operacion = ['m', 'r', 's', '*', '/', '+', '-'];

  var la_indices_niv1 = [], la_indices_niv2 = [], la_indices_niv3 = [];
  var la_indices_nivel_1 = [], la_indices_nivel_2 = [], la_indices_nivel_3 = [];
  var la_orden_indices_niv1 = [], la_orden_indices_niv2 = [], la_orden_indices_niv3 = [];
  var la_orden_indices_nivel_1 = [], la_orden_indices_nivel_2 = [], la_orden_indices_nivel_3 = [];

  var la_operacion_nivel_1 = ['m', 'r', 's'];
  var la_operacion_nivel_2 = ['*', '/'];
  var la_operacion_nivel_3 = ['+', '-'];
  var la_operadores_niv1 = [], la_operadores_niv2 = [], la_operadores_niv3 = [];
  var la_operadores_nivel_1 = [], la_operadores_nivel_2 = [], la_operadores_nivel_3 = [];
  var la_orden_operadores_niv1 = [], la_orden_operadores_niv2 = [], la_orden_operadores_niv3 = [];
  var la_orden_operadores_nivel_1 = [], la_orden_operadores_nivel_2 = [], la_orden_operadores_nivel_3 = [];
  var li_longitudres = 0, lr_resultado = 0.00, li_pospunto = 0;
  var pila = new Pila();

  var ls_cadena = obtenerCadena (la_operacion_nivel_1, la_operacion_nivel_2, la_operacion_nivel_3, as_actual, as_sumado);

  operadorNivel(la_operacion_nivel_1, la_operadores_nivel_1, la_indices_nivel_1, ls_cadena);
    operadorNivel(la_operacion, la_operadores_niv1, la_indices_niv1, ls_cadena);
    cargarOperadorNivel(la_operadores_nivel_1, la_indices_nivel_1, la_orden_operadores_nivel_1, la_orden_indices_nivel_1);
    cargarOperadorNivel(la_operadores_niv1, la_indices_niv1, la_orden_operadores_niv1, la_orden_indices_niv1);
    ordenarOperadorNivel(la_indices_nivel_1, la_orden_indices_nivel_1, la_orden_operadores_nivel_1);
    ordenarOperadorNivel(la_indices_niv1, la_orden_indices_niv1, la_orden_operadores_niv1);
  ls_cadena = operacionNivel (pila, la_orden_indices_niv1, la_orden_indices_nivel_1, la_orden_operadores_niv1, la_orden_operadores_nivel_1, 1, ls_cadena) ;

  operadorNivel(la_operacion_nivel_2, la_operadores_nivel_2, la_indices_nivel_2, ls_cadena);
    operadorNivel(la_operacion, la_operadores_niv2, la_indices_niv2, ls_cadena);
    cargarOperadorNivel(la_operadores_nivel_2, la_indices_nivel_2, la_orden_operadores_nivel_2, la_orden_indices_nivel_2);
    cargarOperadorNivel(la_operadores_niv2, la_indices_niv2, la_orden_operadores_niv2, la_orden_indices_niv2);
    ordenarOperadorNivel(la_indices_nivel_2, la_orden_indices_nivel_2, la_orden_operadores_nivel_2);
    ordenarOperadorNivel(la_indices_niv2, la_orden_indices_niv2, la_orden_operadores_niv2);
  ls_cadena = operacionNivel (pila, la_orden_indices_niv2, la_orden_indices_nivel_2, la_orden_operadores_niv2, la_orden_operadores_nivel_2, 2, ls_cadena) ;

  operadorNivel(la_operacion_nivel_3, la_operadores_nivel_3, la_indices_nivel_3, ls_cadena);
    operadorNivel(la_operacion, la_operadores_niv3, la_indices_niv3, ls_cadena);
    cargarOperadorNivel(la_operadores_nivel_3, la_indices_nivel_3, la_orden_operadores_nivel_3, la_orden_indices_nivel_3);
    cargarOperadorNivel(la_operadores_niv3, la_indices_niv3, la_orden_operadores_niv3, la_orden_indices_niv3);
    ordenarOperadorNivel(la_indices_nivel_3, la_orden_indices_nivel_3, la_orden_operadores_nivel_3);
    ordenarOperadorNivel(la_indices_niv3, la_orden_indices_niv3, la_orden_operadores_niv3);
  ls_cadena = operacionNivel (pila, la_orden_indices_niv3, la_orden_indices_nivel_3, la_orden_operadores_niv3, la_orden_operadores_nivel_3, 3, ls_cadena) ;

  lr_resultado = pila.pop();

  li_longitudres = ls_cadena.length;
  if (li_longitudres > 8) {
    li_pospunto = consultaPunto(ls_cadena, '.') + 1;
	li_pospunto = 8 - li_pospunto;
	lr_resultado = parseFloat(ls_cadena);
	lr_resultado = lr_resultado.toFixed(li_pospunto);
  }

  return lr_resultado;

}

// Se genera identificador de raíz para el primer nivel
function operadorUnitario(as_cadena_operacion, as_tipo_operador){
  var ls_operador1="" ;
  var ls_operador2="" ;
  var ln_resultado = 0;
  var la_indices = [];
  var la_orden_indices = [];
  var la_operadores = [];
  var la_orden_operadores = [];
  var la_operacion = ['*', '/', '+', '-'];

  operadorNivel(la_operacion, la_operadores, la_indices, as_cadena_operacion);
  cargarOperadorNivel(la_operadores, la_indices, la_orden_operadores, la_orden_indices);
  ordenarOperadorNivel(la_indices, la_orden_indices, la_orden_operadores);

  ls_operador1 = as_cadena_operacion.substring(0, la_orden_indices[la_indices.length - 1] + 1);
  ls_operador2 = ")";
  ln_resultado = as_cadena_operacion.substring(la_orden_indices[la_indices.length - 1] + 1, as_cadena_operacion.length);
  return ls_operador1 + as_tipo_operador + "(" + ln_resultado + ls_operador2;

}

// Consulta la existencia y posición de caracter punto en los arreglos de operadores por cada nivel
function consultaPunto(as_cadena_operacion, as_caracter){

  var li_i = 0;
  var li_idxcar = as_cadena_operacion.indexOf(as_caracter);

  while (li_idxcar != -1) {
    li_i = li_i + li_idxcar;
    li_idxcar = as_cadena_operacion.indexOf(as_caracter, li_idxcar + 1);
  }

  return li_i;

}

// Consulta los arreglos según la prelación de los operadores por cada nivel
function consultaOperadorNivel(aa_operacion_nivel, as_cadena_operacion){

  var li_i = 0;
  for (var li_k = 0; li_k < aa_operacion_nivel.length; li_k++) {
    var ls_operacion = aa_operacion_nivel[li_k];
    var idx = as_cadena_operacion.indexOf(ls_operacion);

    while (idx != -1) {
      li_i = li_i + idx;
      idx = as_cadena_operacion.indexOf(ls_operacion, idx + 1);
    }
  }
  return li_i;

}

// Carga los arreglos según la prelación de los operadores por cada nivel
function operadorNivel(aa_operacion_nivel, aa_operadores_nivel, aa_indices_nivel, as_cadena_operacion){

  for (var li_k = 0; li_k < aa_operacion_nivel.length; li_k++) {
    var ls_operacion = aa_operacion_nivel[li_k];
    var idx = as_cadena_operacion.indexOf(ls_operacion);

    while (idx != -1) {
      aa_operadores_nivel.push(ls_operacion);
      aa_indices_nivel.push(idx);
      idx = as_cadena_operacion.indexOf(ls_operacion, idx + 1);
    }
  }
}

// Carga los arreglos que será utilizados para ordenar los operadores por cada nivel
function cargarOperadorNivel(aa_operadores_nivel, aa_indices_nivel, aa_orden_operadores_nivel, aa_orden_indices_nivel){
  for (var li_i = 0; li_i < aa_operadores_nivel.length; li_i++) {
    aa_orden_operadores_nivel[li_i] = aa_operadores_nivel[li_i];
    aa_orden_indices_nivel[li_i] = aa_indices_nivel[li_i];
  }
}

// Ordena los operadores por cada nivel
function ordenarOperadorNivel(aa_indices, aa_orden_indices, aa_orden_operadores){
  var li_i=0;
  var li_j=1;
  var li_k=0;
  var li_l=0;
  var la_orden_ind_temp=[];
  var la_orden_ope_temp=[];
  var lb_operador = false;

  while (!lb_operador) {
    if (li_j < aa_indices.length){
      if (aa_orden_indices[li_i] > aa_orden_indices[li_j]){

        la_orden_ind_temp[li_k]=aa_orden_indices[li_i];
        aa_orden_indices[li_i]=aa_orden_indices[li_j];
        aa_orden_indices[li_j]=la_orden_ind_temp[li_k];

        la_orden_ope_temp[li_k]=aa_orden_operadores[li_i];
        aa_orden_operadores[li_i]=aa_orden_operadores[li_j];
        aa_orden_operadores[li_j]=la_orden_ope_temp[li_k];

        li_i++;
        li_j++;
      } else {
        if (li_j > aa_indices.length){
          li_i=0;
        } else {
          li_i=li_j;
        }
        li_j=li_i+1;
      }
    } else {
      li_i=0;
      li_j=1;
      li_l++;
    }
    if (li_l >= aa_indices.length){
      lb_operador = true;
    }
  }
}

// Evalua operación
function evaluacionItemsPila(pila, as_cadena){

  if (!isNaN(as_cadena)) {
      pila.push(as_cadena - '0');
  } else {
    var val1 = pila.pop();
    var val2 = pila.pop();
    if (val1 == "Underflow" || val2 == "Underflow")
        return "No se puede ejecutar esta evaluación";
    switch (as_cadena) {
    case '+':
        pila.push(val2 + val1);
        break;

    case '-':
        pila.push(val2 - val1);
        break;

    case '/':
        pila.push(val2 / val1);
        break;

    case '*':
        pila.push(val2 * val1);
        break;

    case 'r':
        pila.push(Math.sqrt(val2));
        break;

    case 's':
        pila.push((-1)*(val2));
        break;

    case 'm':
        pila.push(primoMersenne(val2));
        break;

    }
  }
  return pila.peek();
}

// Almacena en la memoria del navegador la operación en ejecución de forma temporal
function guardarOperacion(as_operando, ar_operador) {
  var li_val = 0;

  li_val = consultarContador() + 1;
  var valor = {
    operando: as_operando,
    operador: ar_operador,
    contador: li_val
  }
  localStorage.setItem('valor', JSON.stringify(valor));
}

// Consulta en la memoria del navegador la operación en ejecución
function consultarOperando() {
  var valor = JSON.parse(localStorage.getItem('valor'));
  var ls_operando = "";

  if ( valor != null ) {
	ls_operando = valor.operando ;
  } ;

  return ls_operando;
}

// Consulta en la memoria del navegador el operador almacenado
function consultarOperador() {
  var valor = JSON.parse(localStorage.getItem('valor'));
  var lr_operador = 0.0;

  if ( valor != null ) {
    lr_operador = valor.operador ;
  } ;

  return lr_operador;
}

function consultarContador() {
  var valor = JSON.parse(localStorage.getItem('valor'));
  var li_valor = 0;

  if ( valor != null ) {
    li_valor = valor.contador;
  } ;

  return li_valor;
}

// Guarda en un arreglo, todas las operaciones que se deben ejecutar
function operacionNivel (pila, aa_orden_indices, aa_orden_indices_nivel, aa_orden_operadores, aa_orden_operadores_nivel, an_nivel, as_cadena_operacion) {

  var li_k = 0;
  var li_l = 0;
  var li_m = 0;
  var li_n = 0;
  var li_o = 0;

  var ln_idx_ini = 0;
  var ln_idx_fin = 0;
  var ls_operador1="";
  var ls_operador2="";
  var ln_resultado = 0.00;
  var ls_cadena = as_cadena_operacion;
  var ls_cadena_tmp = "";

  for (var li_i = 0; li_i < aa_orden_indices.length; li_i++) {
    for (var li_j = 0; li_j < aa_orden_indices_nivel.length; li_j++) {

      li_m=li_i-1;
      if (li_i == 0) {
        li_k=0;
      } else {
        li_k=aa_orden_indices[li_m]+1;
      }

      li_n=li_i+1;
      if (li_n == aa_orden_indices.length){
        li_l=as_cadena_operacion.length
      } else {
        li_l=aa_orden_indices[li_n];
      }

      if (aa_orden_indices[li_i] == aa_orden_indices_nivel[li_j]) {
        switch (an_nivel) {
        case 1:
          if ((aa_orden_operadores[li_i] == 'm')) {
            ln_idx_ini = as_cadena_operacion.indexOf('(', li_k);
            ln_idx_fin = as_cadena_operacion.indexOf(')', li_k);
            if (ln_idx_fin == -1) {
               ln_idx_fin = li_l - li_n;
            }
            ls_operador1 = as_cadena_operacion.substring(ln_idx_ini + 1, ln_idx_fin);
          } else if ((aa_orden_operadores[li_i] == 'r') || (aa_orden_operadores[li_i] == 's')) {
            ln_idx_ini = as_cadena_operacion.indexOf('(', li_k);
            ln_idx_fin = as_cadena_operacion.indexOf(')', li_k);
            ls_operador1 = as_cadena_operacion.substring(ln_idx_ini + 1, ln_idx_fin);
          } else if (((aa_orden_operadores[li_m] == '*') || (aa_orden_operadores[li_m] == '/')) && (li_i > 0) && (!pila.isEmpty())) {
            ls_operador1 = pila.pop();
          } else {
            ls_operador1 = as_cadena_operacion.substring(li_k, aa_orden_indices[li_i]);
          }
          break;

        case 2:
          if (((aa_orden_operadores[li_m] == '*') || (aa_orden_operadores[li_m] == '/')) && (li_i > 0) && (!pila.isEmpty())) {
            ls_operador1 = pila.pop();
          } else {
            ls_operador1 = as_cadena_operacion.substring(li_k, aa_orden_indices[li_i]);
          }
          break;

        case 3:
          if (((aa_orden_operadores[li_m] == '+') || (aa_orden_operadores[li_m] == '-')) && (li_i > 0) && (!pila.isEmpty())) {
            ls_operador1 = pila.pop();
          } else {
            ls_operador1 = as_cadena_operacion.substring(li_k, aa_orden_indices[li_i]);
          }
          break;
        }

        if ((aa_orden_operadores[li_i] == 'm') || (aa_orden_operadores[li_i] == 'r') || (aa_orden_operadores[li_i] == 's')) {
          ls_operador2 = ""
        } else {
          ls_operador2 = as_cadena_operacion.substring(aa_orden_indices[li_i]+1, li_l);
          li_o = consultarContador();
          if (li_o == 0) {
            guardarOperacion(aa_orden_operadores[li_i], ls_operador2) ;
		  }
        }

        ln_resultado = evaluacionItemsPila(pila, ls_operador1);
        ln_resultado = evaluacionItemsPila(pila, ls_operador2);
        ln_resultado = evaluacionItemsPila(pila, aa_orden_operadores_nivel[li_j]);

        if (aa_orden_operadores[li_i] == 'm') {
          ls_cadena_tmp = ls_cadena.substring(ln_idx_ini - 1, ln_idx_fin + 1);
        } else if ((aa_orden_operadores[li_i] == 'r') || (aa_orden_operadores[li_i] == 's')) {
          ln_idx_ini = ls_cadena.indexOf('(');
          ln_idx_fin = ls_cadena.indexOf(')');
          ls_cadena_tmp = ls_cadena.substring(ln_idx_ini - 1, ln_idx_fin + 1);
        } else {
          ls_cadena_tmp = ls_operador1 + aa_orden_operadores_nivel[li_j] + ls_operador2;
        }

        ls_cadena = ls_cadena.replace(ls_cadena_tmp,ln_resultado);

        break;
      }
    }
  }

  return ls_cadena;
}
