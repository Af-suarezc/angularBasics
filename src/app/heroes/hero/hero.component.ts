import {Component} from '@angular/core';

@Component({
  selector:'app-hero',
  templateUrl:'./hero.component.html'
})

export class HeroComponent{
  name:string='wolverine';
  age:number=105;

  get capName(){
    return this.name.toUpperCase();
  }
  getName():string{

    return `${this.name} -  ${this.age}`
  }
  changeName():void{
    this.name='Itachi';

  }
  changeAge():void{
    this.age =200;
  }
}
