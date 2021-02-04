import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

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
