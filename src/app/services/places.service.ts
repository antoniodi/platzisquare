import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  places: any = [
    {id: 1, name: 'Medellin'},
    {id: 2, name: 'Bucaramanga'},
    {id: 3, name: 'Bogotá'},
    {id: 4, name: 'Cali'},
    {id: 4, name: 'Santander'},
  ];
  constructor() { }

  public getPlaces() {
    return this.places;
  }
}
