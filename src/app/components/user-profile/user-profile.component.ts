import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name = "Rana jay";
  salary = 1000000 ;
  isButtonDisabled = false;
  inputValue = "test";
  inputValue2 = "test2";

  onChange(e:Event){
    const value = (e.target as HTMLInputElement).value ;
    this.inputValue = value;
    console.log(value);
  }

}
