import { Component ,OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent{
  [x: string]: any;
  title = 'custom-table';
  list=[
    {
      id:1, name:'Publisher',
     
    },
    {
      id:2, name:'Ad Unit',
     
    }
   
  ]
  itemSelected(e:any){
    console.log(e);



}
}
