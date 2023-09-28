import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  operandoA: number | undefined;
  operandoB: number | undefined;

  resultado: number | undefined;

  sumar(){
    if((this.operandoA !== undefined)&&(this.operandoB !== undefined)){
      this.resultado = this.operandoA + this.operandoB;
    }
  }
  restar(){
    if((this.operandoA !== undefined)&&(this.operandoB !== undefined)){
      this.resultado = this.operandoA - this.operandoB;
    }
  }
  multiplicar(){
    if((this.operandoA !== undefined)&&(this.operandoB !== undefined)){
      this.resultado = this.operandoA * this.operandoB;
    }
  }
  dividir(){
    if((this.operandoA !== undefined)&&(this.operandoB !== undefined)){
      if(this.operandoB !== 0){
        this.resultado = this.operandoA / this.operandoB;
      }
    }
  }
}
