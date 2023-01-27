import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { enableRipple } from '@syncfusion/ej2-base';
import { SecondCComponent } from './second-c/second-c.component';
import { ThirdCComponent } from './third-c/third-c.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { PracticeComponent } from './practice/practice.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DrpComponent } from './drp/drp.component';




enableRipple(true);

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SecondCComponent,
    ThirdCComponent,
    PracticeComponent,
    DrpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    NgSelectModule
    
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
