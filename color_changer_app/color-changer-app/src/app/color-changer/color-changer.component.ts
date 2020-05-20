import { Component, OnInit, ElementRef } from '@angular/core';
import { element, Button } from 'protractor';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css']
})
export class ColorChangerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  changeColor (col: string)
  {
    (document.querySelector('#changeable') as HTMLElement).style.backgroundColor = col;
  }
}
