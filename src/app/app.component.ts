import { Component } from '@angular/core';
import { FormFieldTypes } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formFields: FormFieldTypes;

  constructor() {
    this.formFields = [
      {
        type: "email",
        label: "Custom email Label",
        placeholder: "custom email placeholder",
        required: true,
      },
      {
        type: "password",
        label: "Custom Password Label",
        placeholder: "custom password placeholder",
        required: true,
      },
      {
        type: "phone_number",
        label: "Custom Phone Label",
        placeholder: "custom Phone placeholder",
        required: false,
      },
    ];
  }
}