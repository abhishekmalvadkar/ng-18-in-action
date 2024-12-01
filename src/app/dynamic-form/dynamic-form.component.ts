import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {

  config = [
    {
      displayName: 'Project',
      type: 'single-select',
      default: 'Maven',
      values: [
        { key: 'Gradle - Groovy', value: 'Gradle - Groovy' },
        { key: 'Gradle - Kotlin', value: 'Gradle - Kotlin' },
        { key: 'Maven', value: 'Maven' }
      ]
    },
    {
      displayName: 'Language',
      type: 'single-select',
      default: 'Java',
      values: [
        { key: 'Java', value: 'Java' },
        { key: 'Kotlin', value: 'Kotlin' },
        { key: 'Groovy', value: 'Groovy' }
      ]
    },
    {
      displayName: 'Group',
      type: 'text',
      default: 'com.example',
      required: true,
      values: []
    },
    {
      displayName: 'Artifact',
      type: 'text',
      default: 'demo',
      required: true,
      values: []
    },
    {
      displayName: 'Packaging',
      type: 'single-select',
      default: 'Jar',
      values: [
        { key: 'Jar', value: 'Jar' },
        { key: 'War', value: 'War' }
      ]
    },
    {
      displayName: 'Java Version',
      type: 'single-select',
      default: '17',
      values: [
        { key: '23', value: '23' },
        { key: '21', value: '21' },
        { key: '17', value: '17' }
      ]
    }
  ];

  formValues: { [key: string]: any } = {};
  errors: { [key: string]: string } = {};

  onInputChange(displayName: string, value: any) {
    // debugger;
    this.formValues[displayName] = value;
    this.validateField(displayName, value);
    console.log(this.formValues);
  }

  validateField(displayName: string, value: any) {
    const field = this.config.find(f => f.displayName === displayName);
    if (field?.required && (!value || value.trim() === '')) {
      this.errors[displayName] = `${displayName} is required.`;
    } else {
      delete this.errors[displayName];
    }
  }

  onSubmit() {
    this.config.forEach(field => this.validateField(field.displayName, this.formValues[field.displayName]));
    if (Object.keys(this.errors).length > 0) {
      console.log('Form has errors:', this.errors);
    } else {
      console.log('Form submitted successfully:', this.formValues);
    }
  }

}
