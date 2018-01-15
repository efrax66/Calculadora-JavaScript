var Calculadora = {
  /* Declaración de variable*/
  pantalla: document.getElementById("display").innerHTML,
  puntodecimal: 0, //variable para los decimales
  negativo: 0, // variable para el estado positivo o negativo
  numMaximo: 8, // variable cantidad maxima de numeros en pantalla
  stop: 0, // variable para la funcion display de la calculadora
  num1: 0, // variable para el numero a introducir
  opcion: 0, // variable para las opciones suma, resta, multiplicar y dividir
  numPantalla: 0, // variable que toma el numero que esta en la pantalla
  estadoTemp: 0, // variable temporal mientras hacemos una operacion
  inicio: (
    function(){
      this.EventosClick();
    }
  ),


  /*funcion de suma*/
  mas: function(){
    this.aniBtn("mas");
    this.num1 += Number(this.pantalla),
    this.pantalla = "",
    this.opcion = 1,
    this.estadoTemp = 0,
    this.negativo = 0,
    this.numPantalla = 0,
    this.puntodecimal = 0,
    this.mostrarPantalla();
  },

  /*funcion de resta*/
  menos: function(){
    this.aniBtn("menos");
    this.num1 = Number(this.pantalla);
    this.pantalla = "",
    this.opcion = 2,
    this.estadoTemp = 0,
    this.negativo = 0,
    this.numPantalla = 0,
    this.puntodecimal = 0,
    this.mostrarPantalla();
  },
  /*funcion de multiplicacion*/
  por: function(){
    this.aniBtn("por");
    this.num1 = Number(this.pantalla),
    this.pantalla = "",
    this.opcion = 3,
    this.estadoTemp = 0,
    this.negativo = 0,
    this.numPantalla = 0,
    this.puntodecimal = 0,
    this.mostrarPantalla();
  },
  /*funcion de divicion*/
  dividido: function(){
    this.aniBtn("dividido");
    this.num1 = Number(this.pantalla),
    this.pantalla = "",
    this.opcion = 4,
    this.estadoTemp = 0,
    this.negativo = 0,
    this.numPantalla = 0,
    this.puntodecimal = 0,
    this.mostrarPantalla();
  },
    
  /*función igual*/
  igual: function(){
  this.aniBtn("igual");
  switch(this.opcion){
    case 1:
        if(this.estadoTemp == 0){
            this.numPantalla = Number(this.pantalla),
            this.pantalla = this.num1 + Number(this.pantalla),
            this.estadoTemp = 1,
            this.num1 = 0;
        }else{
            this.pantalla = Number(this.pantalla)+this.numPantalla;
        }
      break;
    case 2:
        if(this.estadoTemp == 0){
            this.numPantalla = Number(this.pantalla),
            this.pantalla = this.num1 - Number(this.pantalla),
            this.estadoTemp = 1,
            this.num1 = 0;
        }else{
            this.pantalla = Number(this.pantalla)-this.numPantalla;
        }
      break;
    case 3:
        if(this.estadoTemp == 0){
            this.numPantalla = Number(this.pantalla),
            this.pantalla = this.num1 * Number(this.pantalla),
            this.estadoTemp = 1,
            this.num1 = 0;
        }else{
            this.pantalla = Number(this.pantalla)*this.numPantalla;
        }
      break;
    case 4:
        if(this.estadoTemp == 0){
            this.numPantalla = Number(this.pantalla),
            this.pantalla = this.num1 / Number(this.pantalla),
            this.estadoTemp = 1,
            this.num1 = 0;
        }else{
            this.pantalla = Number(this.pantalla)/this.numPantalla;
        }
      break;
      default:
          break;
  }
  this.mostrarPantalla();
  },
  /* asignar los eventos a cada tecla */
  EventosClick: function(){
    document.getElementById("0").addEventListener("click",function(){Calculadora.displayNumero("0")});
    document.getElementById("1").addEventListener("click",function(){Calculadora.displayNumero("1")});
    document.getElementById("2").addEventListener("click",function(){Calculadora.displayNumero("2")});
    document.getElementById("3").addEventListener("click",function(){Calculadora.displayNumero("3")});
    document.getElementById("4").addEventListener("click",function(){Calculadora.displayNumero("4")});
    document.getElementById("5").addEventListener("click",function(){Calculadora.displayNumero("5")});
    document.getElementById("6").addEventListener("click",function(){Calculadora.displayNumero("6")});
    document.getElementById("7").addEventListener("click",function(){Calculadora.displayNumero("7")});
    document.getElementById("8").addEventListener("click",function(){Calculadora.displayNumero("8")});
    document.getElementById("9").addEventListener("click",function(){Calculadora.displayNumero("9")});
    document.getElementById("on").addEventListener("click",function(){Calculadora.on("")});
    document.getElementById("sign").addEventListener("click",function(){Calculadora.sign()});
    document.getElementById("dividido").addEventListener("click",function(){Calculadora.dividido()});
    document.getElementById("menos").addEventListener("click",function(){Calculadora.menos()});
    document.getElementById("punto").addEventListener("click",function(){Calculadora.punto()});
    document.getElementById("igual").addEventListener("click",function(){Calculadora.igual()});
    document.getElementById("mas").addEventListener("click",function(){Calculadora.mas()});
    document.getElementById("por").addEventListener("click",function(){Calculadora.por()});
  },

    /*Funcion para la animación de los botones*/

  aniBtn: function(tecla){      
    document.getElementById(tecla).style.transform="scale(0.9)";
    setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
  },
  
  /* función del display de la calculadora*/
  displayNumero: function(valor){
    this.aniBtn(valor);
    if(this.negativo == 1 && this.stop == 0){
      this.numMaximo += 1,
      this.stop = 1;
    }
    if(this.puntodecimal == 1  && this.stop == 0){
      this.numMaximo += 1,
      this.stop = 1;
    }
    if(this.pantalla.length < this.numMaximo){
      if(this.pantalla != "0"){
          this.pantalla += valor;
      }else if(valor != 0){
          this.pantalla = "",
          this.pantalla += valor;
      }
      this.mostrarPantalla();
    }
  },
  /* funcion de resetear la calculadora*/
  on: function(){
    this.aniBtn("on");
    this.pantalla = "0",
    this.puntodecimal = 0,
    this.negativo = 0,
    this.stop = 0,
    this.numMaximo = 8 
    this.num1 = 0,
    this.estadoTemp = 0,
    this.numPantalla = 0,    
    this.opcion = 0,
    this.mostrarPantalla();
  },
  /* función estado negativo o positivo*/
  sign: function(){
    this.aniBtn("sign");
    if(this.pantalla != 0){
      if(this.negativo == 0){
          this.pantalla = "-" + this.pantalla,
          this.negativo = 1;
      }else{
          this.pantalla = this.pantalla.slice(1);
          this.negativo = 0;
      }
    }
    this.mostrarPantalla();
  },
  /*función para colocar los decimales*/
  punto: function(){
    this.aniBtn("punto");
    if(this.puntodecimal == 0){
        this.pantalla += ".";
    }
    this.puntodecimal = 1,
    this.mostrarPantalla();
  },
  /*funcion para mostrar en pantalla*/
  mostrarPantalla: function(){
    if(this.pantalla.toString().length > this.numMaximo){
        this.pantalla = this.pantalla.toString().substring(0,8);
    }
    document.getElementById("display").innerHTML = this.pantalla;
  }       
}
Calculadora.inicio();