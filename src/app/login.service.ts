import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

  url = 'http://localhost:4000/user'






  constructor(
    private router: Router,
    private httpClient: HttpClient) { }

    signin(email: string, password: string) {
      const body = {
         "u_email": email,
      "u_password": password
      }
  console.log(this.url)
      return this.httpClient.post(this.url + '/login', body)
    }
  /***************************** */

  /************************ */

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (sessionStorage['token']) {
        // user is already logged in
        // launch the component
        return true
      }
       // force user to login
    this.router.navigate(['/login'])

    // user has not logged in yet
    // stop launching the component
    return false
  }
  
  login(email: string, password: string) {
    const body = {
      "u_email": email,
      "u_password": password
    }

    return this.httpClient.post(this.url+"/auth" , body)
  }

  addUser(userObj){    
    let data = {
      "u_first_name": userObj.name,
      "u_last_name": userObj.name,
      "u_email": userObj.email,
      "u_address": userObj.address,
      "u_mobile": userObj.mobile,
      "u_password": userObj.password
    }
    return  this.httpClient.post(this.url + "/register",data);
  }
 
}
