import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  users: any = [
    {id: 1, name: 'Antonio Cortés', age: 24},
    {id: 1, name: 'Leidy Rueda', age: 19},
    {id: 1, name: 'Sandra rueda', age: 18},
    {id: 1, name: 'Diana Rueda', age: 17},
    {id: 1, name: 'Julian Rueda', age: 16}
  ];

  cities: any = [
    {id: 1, name: 'Medellin'},
    {id: 2, name: 'Bucaramanga'},
    {id: 3, name: 'Bogotá'},
    {id: 4, name: 'Cali'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
