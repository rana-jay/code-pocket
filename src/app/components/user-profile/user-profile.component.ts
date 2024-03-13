import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

function formateName(value:string){
  return "hi " + value ; 
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent {

  @Input({alias:'userName',transform:formateName}) name  = " ";

  // name = "Rana jay";
  // salary = 1000000 ;
  // isButtonDisabled = false;
  // inputValue = "test";
  // inputValue2 = "test2";

  // users = [
  //   {
  //     name:"jay",
  //     salary:100000
  //   },
  //   {
  //     name:"manthan",
  //     salary:200000
  //   },
  //   {
  //     name:"animesh",
  //     salary:300000
  //   }
  // ]

  // onChange(e:Event){
  //   const value = (e.target as HTMLInputElement).value ;
  //   this.inputValue = value;
  //   console.log(value);
  // }

}
