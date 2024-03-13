import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component'; // here path of components 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent], // adding components here 
  templateUrl: './app.component.html', // we can also add html here using template which is inline template
  styleUrl: './app.component.css' // we can also add css here using style :  which is inline style 
})
export class AppComponent {
  title = 'code-pocket';
}
