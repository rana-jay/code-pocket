import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component'; // here path of components 
import { UserProfile2Component } from './components/user-profile2/user-profile2.component';
import { InlinehtmltrialComponent } from './components/inlinehtmltrial/inlinehtmltrial.component';
import { InlinestyletrialComponent } from './components/inlinestyletrial/inlinestyletrial.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,UserProfile2Component,InlinehtmltrialComponent,InlinestyletrialComponent,CommonModule], // adding components here 
  templateUrl: './app.component.html', // we can also add html here using template which is inline template
  styleUrl: './app.component.css' // we can also add css here using style :  which is inline style 
})
export class AppComponent {
  title = 'code-pocket';

  users = [
    {
      name : "Jay",
      salary : 100000
    },
    {
      name: "Manthan",
      salary : 200000
    },
    {
      name: "Animesh",
      salary : 300000
    }
  ]

recievedData(e:string){
  console.log(e);
};

recievedData2(e:User){
  console.log(e);
  const userIndex = this.users.findIndex(u=>u.name == e.name);
  console.log(userIndex);
};

clear(){
  this.users =[];
  console.log("clearning")
}
}
