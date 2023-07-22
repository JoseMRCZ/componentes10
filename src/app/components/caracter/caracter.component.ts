import { Component, Input } from '@angular/core';
import {Caracter} from '../../models/caracter.model';

@Component({
  selector: 'app-caracter',
  templateUrl: './caracter.component.html',
  styleUrls: ['./caracter.component.css']
})
export class CaracterComponent {
  @Input() caracter!: Caracter;

}
