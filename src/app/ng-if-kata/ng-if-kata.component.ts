import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-kata',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ng-if-kata.component.html',
  styleUrl: './ng-if-kata.component.css'
})
export class NgIfKataComponent {
  showGreenBox = true;
}
