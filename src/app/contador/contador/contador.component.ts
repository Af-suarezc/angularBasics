import { Component } from "@angular/core";

@Component({
  selector:'app-contador',
  template:`
    <h1>{{title}}</h1>
    <h3>operation drive by <strong>{{base}}</strong></h3>
    <button (click)="acc(-base)">Sub -{{base}}</button>
    <span>{{num}}</span>
    <button (click)="acc(base)">Add +{{base}}</button>
  `
})

export class ContadorComponent{
  title = 'Contador App';
  num: number = 0;
  base: number = 5;
  // sub(){
  //   this.num -= 1;
  // }
  // add(){
  //   this.num += 1;
  // }
  acc(valor: number) {
    this.num += valor;
  }
}
