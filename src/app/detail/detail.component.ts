import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
employes: any = [
  {id: 1, name: 'Sandra', price: 1500},
  {id: 1, name: 'Sandra', price: 1500},
  {id: 1, name: 'Sandra', price: 1500},
  {id: 1, name: 'Sandra', price: 1500},
  {id: 1, name: 'Sandra', price: 1500}
];

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    console.log(this.route.snapshot.queryParams['action2']);
    console.log(this.route.snapshot.queryParams['param1']);
   }

  ngOnInit() {
    this.route.params
      .subscribe(parametro => {
        console.log ( 'parametro: ', parametro['id'] );
  });
}

}
