import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css'],
  standalone: true,
  imports: [MatChipsModule]
})
export class ChipsComponent {

}
