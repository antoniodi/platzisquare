import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Plantilla';
  enable = false;
  name: string;
  lastName: string;
  employes: any = [
    {active: true, name: 'Ana Milena'},
    {active: false, name: 'Laidy Rueda'},
    {active: true, name: 'Sandra Catalina'},
    {active: true, name: 'Elizabeth Correa'},
    {active: true, name: 'Alejandra Rendon'}
  ];

  users: any = [
    {name: 'Antonio Cortés', age: 24},
    {name: 'Leidy Rueda', age: 19},
    {name: 'Sandra rueda', age: 18},
    {name: 'Diana Rueda', age: 17},
    {name: 'Julian Rueda', age: 16}
  ];

  articles: any = [
    {outlet: 'yes', price: 12000, name: 'Juan Valdes'},
    {outlet: 'yes', price: 12000, name: 'Juan Valdes'},
    {outlet: 'no', price: 17000, name: 'Arturo Calle'},
    {outlet: 'no', price: 17000, name: 'Arturo Calle'},
    {outlet: 'no', price: 17000, name: 'Arturo Calle'}
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
