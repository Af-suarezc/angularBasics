import { Component, Input, Output, EventEmitter} from '@angular/core';
import { DbzWarrior } from '../interfaces/dbzwarriors';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {
  @Input()newData:DbzWarrior={name:'',power:0};


  // @Output()onNewData:EventEmitter<DbzWarrior> =new EventEmitter();
  addHero(){
    // // this.warrios.push(this.newData)


    console.log(this.newData.name)
    this.dbzService.addNewCharacter(this.newData)
    this.newData={
      name:'',
      power:0
    }
    console.log(this.dbzService.warriors)

  }
  constructor(private dbzService:DbzService){}
}
