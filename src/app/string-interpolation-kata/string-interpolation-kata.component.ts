import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation-kata',
  standalone: true,
  imports: [],
  templateUrl: './string-interpolation-kata.component.html',
  styleUrl: './string-interpolation-kata.component.css'
})
export class StringInterpolationKataComponent {
  message = 'Welcome to ng 18 in action section';

  getContent(){
    return 'That is good';
  }

}
