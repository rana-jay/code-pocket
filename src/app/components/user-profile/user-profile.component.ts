import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounrtyCodePipe } from '../../pipes/counrty-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, CounrtyCodePipe, HighlightDirective], // here need to add module for use example 
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent {
  

  name = "Rana jay";
  salary = 1000000;
  mobileNo = 9104102578;

  isButtonDisabled = false;
  inputValue = "test";
  inputValue2 = "test2";
  btnData = "click me for disable me :"

  users = [
    {
      name: "jay",
      salary: 100000
    },
    {
      name: "manthan",
      salary: 200000
    },
    {
      name: "animesh",
      salary: 300000
    }
  ]

  

  // on event change 
  onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.inputValue = value;
    console.log(value);
  }

  onClick2() {
    this.isButtonDisabled = true;
    this.btnData = "Refesh for agin button ";
  }

  ngOnDestroy(): void {
    //unregister event listener 
    console.log("componente destroy..");
  }

}
