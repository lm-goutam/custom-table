import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule, FormArray, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-practice',
  templateUrl:  './practice.component.html',
  styleUrls: ['./practice.component.css'],
  

})
export class PracticeComponent implements OnInit {
  submitted=false;

  constructor(private _fb: FormBuilder) { }
 
  public addmore !: FormGroup;

  

  ngOnInit() {

    //validations

    this.addmore=this._fb.group({
      


    })


  	this.addmore = this._fb.group({
      
  	  title:[''],
  	  type:[''],
      start:[''],
      end:[''],
      lineitemid:[''],
      camp:[''],
      impr:[''],
      duration:[''],
      range:[''],
      ad:[''],
      dsp:[''],
      fee:[''],
      itemRows: this._fb.array([this.initItemRows()])

   
    })
   
  }
  get formArr() {
    return this.addmore.get('itemRows') as FormArray;
  }

  initItemRows() {
    return this._fb.group({
    start:[''],
    end:[''],
    lineitemid:[''],
    camp:[''],
    impr:[''],
    duration:[''],
    range:[''],
    ad:[''],
    dsp:[''],
    fee:[''],
    });
  }
  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
  AddInfo(data:object):void{
    console.warn(data)
}
  list=[
    {
      id:1, name:'Publisher',
     
    },
    {
      id:2, name:'Ad Unit',
     
    },
    {
      id:3, name:'Displayroup',
     
    },
    {
      id:4, name:'Creative',
    },

   
  ]
  itemSelected(e:any){
    console.log(e);
}
  
      
  



}