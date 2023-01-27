import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-content',
 
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor(private route:Router){}
  title='this is content page'
  myform!:FormGroup;
  submitted:boolean=false;
  
    nextpage()
    {
      this.route.navigate(['second'])
  
    }
    AddInfo(data:object):void{
      console.warn(data)

    }
  



 
}
