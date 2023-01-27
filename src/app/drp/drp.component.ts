import { Component } from '@angular/core';

@Component({
  selector: 'app-drp',
  templateUrl: './drp.component.html',
  styleUrls: ['./drp.component.css']
})
export class DrpComponent {

  list=[
    {
      id:1, name:'first',
     
    },
    {
      id:2, name:'second',
     
    }
   
  ]
  itemSelected(e:any){
    console.log(e);
      
  }

}
