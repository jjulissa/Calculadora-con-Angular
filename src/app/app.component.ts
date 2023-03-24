import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora con Angular'; 

  numeroUno: number = 0; 
  numeroDos: number = 0; 
  resultado: number = 0; 

  suma():void { 
    this.resultado = this.numeroUno + this.numeroDos; 
    console.log(this.numeroUno); 
    console.log(this.numeroDos); 
    console.log(this.resultado);
    
  } 

  resta(): void {  
    this.resultado = this.numeroUno - this.numeroDos;  

    console.log(this.numeroUno); 
    console.log(this.numeroDos); 
    console.log(this.resultado);
  } 

  multiplicar():void {  
    this.resultado = this.numeroUno * this.numeroDos;  

    console.log(this.numeroUno); 
    console.log(this.numeroDos); 
    console.log(this.resultado);
  } 

  dividir():void {  
    this.resultado = this.numeroUno / this.numeroDos;  

    console.log(this.numeroUno); 
    console.log(this.numeroDos); 
    console.log(this.resultado);
  }

}
