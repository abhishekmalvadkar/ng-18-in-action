import { NgIfKataComponent } from './ng-if-kata/ng-if-kata.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StringInterpolationKataComponent } from './string-interpolation-kata/string-interpolation-kata.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StringInterpolationKataComponent,
    NgIfKataComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-18-in-action';
  showStringInterpolationKata = false
  showNgIfKata = false
}
