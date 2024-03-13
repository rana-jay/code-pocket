import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule], // here need to add module for use example 
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent {

  name = "Rana jay";
  salary = 1000000 ;
  isButtonDisabled = false;
  inputValue = "test";
  inputValue2 = "test2";
  btnData = "click me for disable me :"

  users = [
    {
      name:"jay",
      salary:100000
    },
    {
      name:"manthan",
      salary:200000
    },
    {
      name:"animesh",
      salary:300000
    }
  ]

  // on event change 
  onChange(e:Event){
    const value = (e.target as HTMLInputElement).value ;
    this.inputValue = value;
    console.log(value);
  }

  onClick2(){
    this.isButtonDisabled = true;
    this.btnData = "Refesh for agin button " ;
  }

}
