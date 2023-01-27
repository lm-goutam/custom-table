import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,ReactiveFormsModule, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-third-c',
  templateUrl: './third-c.component.html',
  styleUrls: ['./third-c.component.css']
})
export class ThirdCComponent implements OnInit{


  constructor(private _fb: FormBuilder) { }
  public addmore: FormGroup;

  ngOnInit() {
  	this.addmore = this._fb.group({
  	  title:[''],
  	  type:[''],
  	  lineitemid:[''],
      camp:[''],
      impr:[''],
      duration:[''],
      range:[''],
      ad:[''],
      dsp:[''],
      fee:[''],
      itemRows: this._fb.array([this.initItemRows()])
    });
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
    });
  }
  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }


}
