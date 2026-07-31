import { Component } from '@angular/core';
import { VeiculosComponent } from './veiculos/veiculos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    VeiculosComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

}