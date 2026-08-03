import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-veiculos',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, NgFor],
  templateUrl: './veiculos.html',
  styleUrls: ['./veiculos.css']
})
export class VeiculosComponent {

  modelo: string = '';
  valorServico: number = 0;
  listaVeiculos: Array<{ modelo: string; valorServico: number }> = [];

  cadastrar() {
    if (!this.modelo || this.valorServico <= 0) {
      return;
    }

    this.listaVeiculos.push({
      modelo: this.modelo,
      valorServico: this.valorServico
    });

    this.modelo = '';
    this.valorServico = 0;
  }

  excluir(indice: number) {
    this.listaVeiculos.splice(indice, 1);
  }
}