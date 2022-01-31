import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  Router, 
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthententicationService } from '../../services/authententication.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private authService: AuthententicationService, private router: Router) {}

  // canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> {
  //   return this.authService.isLoggedIn.pipe(
  //       take(1),
  //       map((isLoggedIn: boolean) => {
  //         if (!isLoggedIn){
  //           this.router.navigate(['/login']);
  //           return false;
  //         }
  //         return true;
  //       }));
  // }


  public canActivate():  boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
