import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { StringInterpolationKataComponent } from './string-interpolation-kata/string-interpolation-kata.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path : 'sik', component : StringInterpolationKataComponent},
  {path : 'dynamic-fomr', component : DynamicFormComponent,
}];
