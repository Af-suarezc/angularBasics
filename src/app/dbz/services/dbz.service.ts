import { Injectable } from "@angular/core";
import { DbzWarrior } from "../interfaces/dbzwarriors";
@Injectable()

export class DbzService{
  private warriorsZ:DbzWarrior[]=[{
    name:'Roshi',
    power:1000
  }];

  get warriors():DbzWarrior[]{
    return [...this.warriorsZ];
  }
  constructor() {  }
 addNewCharacter(warrior:DbzWarrior){
    this.warriorsZ.push(warrior);
  }
}
