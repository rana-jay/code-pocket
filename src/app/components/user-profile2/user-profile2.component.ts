
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';


function formateName(value:string){
  return "hi " + value ; 
}




@Component({
  selector: 'app-user-profile2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-profile2.component.html',
  styleUrl: './user-profile2.component.css'
})

export class UserProfile2Component {


  // for taking input
  // transform function used to transform input data 
  // alias use to  take another variable name rather than input name 
  // @Input({alias:'userName',transform:formateName}) name2  = " ";
  @Input({alias:'userName'}) name2  = " ";

  @Output() myEvent = new EventEmitter<string>();
  sendData(){
    this.myEvent.emit("Coders never quit .. ");
    // console.log("hi");
  }

  @Output() myEvent2 = new EventEmitter<User>();
  sendData2(){
    this.myEvent2.emit({name:this.name2,salary:100000});
  }


}
