import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'helloworld',
  templateUrl: './helloworld.html'
})
export class helloworldComponent {
  iAmVariableFromTheClass: string = "Hello World Declaration";
  show: boolean = true;

    constructor (){
      this.iAmVariableFromTheClass = "Hello World Constructor";
    }

}
