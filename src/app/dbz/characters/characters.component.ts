import { Component, Input} from '@angular/core';
import { DbzWarrior } from '../interfaces/dbzwarriors';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {
  // @Input() warriorsZ:DbzWarrior[]=[];
  get warriors():DbzWarrior[]{
    return this.dbzService.warriors;
  }
  constructor(private dbzService:DbzService){}
}
