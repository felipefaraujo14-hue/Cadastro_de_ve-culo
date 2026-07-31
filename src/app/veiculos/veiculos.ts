import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-veiculos',
  standalone: true,
  imports: [FormsModule,CurrencyPipe,NgFor],
  templateUrl: './veiculos.html',
  styleUrls: ['./veiculos.css']
})
export class VeiculosComponent {

  modelo: string = '';
  valorServico: number = 0;
  listaVeiculos: any[] = [];

  cadastrar() {
    this.listaVeiculos.push({
      modelo: this.modelo,
      valorServico: this.valorServico
    });

    this.modelo = '';
    this.valorServico = 0;
  }
  
  limpar(){
   this.listaVeiculos = [];
    this.modelo = '';
    this.valorServico = 0;
  }
}