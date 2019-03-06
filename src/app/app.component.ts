import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngSwitch';
  enable = false;
  name: string;
  lastName: string;
  employes: any = [
    {typeValue: 'low', price: 120000, name: 'Ana Milena'},
    {typeValue: 'low', price: 120000, name: 'Ana Lizua'},
    {typeValue: 'low', price: 120000, name: 'Laidy Rueda'},
    {typeValue: 'medium', price: 160000, name: 'Sandra Catalina'},
    {typeValue: 'medium', price: 160000, name: 'Elizabeth Correa'},
    {typeValue: 'high', price: 220000, name: 'Alejandra Rendon'},
    {typeValue: 'high', price: 220000, name: 'Vanesa Roldan'}
  ];

  users: any = [
    {name: 'Antonio Cortés', age: 24},
    {name: 'Leidy Rueda', age: 19},
    {name: 'Sandra rueda', age: 18},
    {name: 'Diana Rueda', age: 17},
    {name: 'Julian Rueda', age: 16}
  ];

  constructor() {
    setTimeout(() => {
      this.enable = true;
    },
      3000);
  }

  activateButton(aName: string): boolean {
    console.log(aName);
    if (this.enable) {
      this.enable = false;
    } else {
      this.enable = true;
      alert('Button is activate' + aName);
    }
    return this.enable;
  }

  addEmploye(employesName: string) {
  }

}
