import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-c',
  templateUrl: './second-c.component.html',
  styleUrls: ['./second-c.component.css']
})
export class SecondCComponent {
  constructor(private route:Router){}
  next()
  {
    this.route.navigate(['third'])

  }

}
