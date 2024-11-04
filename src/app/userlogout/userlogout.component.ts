import { Component } from '@angular/core';

@Component({
  selector: 'app-userlogout',
  templateUrl: './userlogout.component.html',
  styleUrls: ['./userlogout.component.css']
})
export class UserlogoutComponent {
  userlogout(){
    localStorage.removeItem('User')
    localStorage.removeItem('SingleUser')
  }
}
