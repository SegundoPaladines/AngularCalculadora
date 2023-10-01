import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-formulario',
    templateUrl:'./formulario.component.html',
    styleUrls:[]
})

export class FormularioComponent{

  @Output() enviarResultado = new EventEmitter<number>();

  operandoA: number | undefined;
  operandoB: number | undefined;

  sumar(){
    if((this.operandoA !== undefined)&&(this.operandoB !== undefined)){
      this.enviarResultado.emit(this.operandoA + this.operandoB);
    }
  }
  restar(){
    if((this.operandoA !== undefined)&&(this.operandoB !== undefined)){
      this.enviarResultado.emit(this.operandoA - this.operandoB);
    }
  }
  multiplicar(){
    if((this.operandoA !== undefined)&&(this.operandoB !== undefined)){
      this.enviarResultado.emit(this.operandoA * this.operandoB);
    }
  }
  dividir(){
    if((this.operandoA !== undefined)&&(this.operandoB !== undefined)){
      if(this.operandoB !== 0){
        this.enviarResultado.emit(this.operandoA / this.operandoB);
      }
    }
  }
}
