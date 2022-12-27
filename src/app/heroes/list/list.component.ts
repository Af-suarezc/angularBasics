import { Component} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroes:string[]=['bach', 'tremonti','lofii','doggos','parrots'];
  deleted:string[]=[];

  borrarHeroe(){
    let i:number = Math.random() * this.heroes.length;
    // let arr:string[]=[]
    this.deleted= this.heroes.splice(i,1) || '';

  }
}
