import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/components/login/login.component';


@Injectable({
  providedIn: 'root'
})
export class AuthententicationService {

 // private loggedIn = new BehaviorSubject<boolean>(true);

  // get isLoggedIn() {
  //   return this.loggedIn.asObservable();
  // }

  // constructor(private router: Router) {}

  // login(user: User){
  //   if (user.userName !== '' && user.password !== '' ) {
  //     this.loggedIn.next(true);
  //     this.router.navigate(['/home']);
  //   }
  // }

  // logout() {
  //   this.loggedIn.next(false);
  //   this.router.navigate(['/login']);
  // }


  public isAuthenticated(): boolean {
    let myStorage = window.localStorage;
    const testMyValToAuth = myStorage.getItem("authenticatedUSer");
    if(testMyValToAuth){
      return true
    }
    return false;
   }
}
