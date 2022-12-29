import { Component} from '@angular/core';

import { DbzWarrior } from '../interfaces/dbzwarriors';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  warriorsZ:DbzWarrior[]=[];
  newCharacter:DbzWarrior={
    name:'Roshi',
    power:1000
  };

  // addNewCharacter(event:DbzWarrior){
  //   this.warriors.push(event)
  //   this.newCharacter={
  //     name:'',
  //     power:0
  //   }
  // }

  // get warriors():DbzWarrior[]{
  //   return this.dbzService.warriors
  // }

  constructor(private dbzService:DbzService){ }

}
