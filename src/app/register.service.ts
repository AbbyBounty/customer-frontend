import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  
  url = 'http://localhost:8080/user'




  constructor(
    private router: Router,
    private httpClient: HttpClient) { }


  register(userObj) {
    const body = {

      "u_first_name":userObj.u_first_name,
      "u_last_name":userObj.u_last_name,
      "u_email":userObj.u_email,
      "u_mobile":userObj.u_mobile,
      "u_address":userObj.u_address,
      "u_password":userObj.u_password

     
    }

    return this.httpClient.post(this.url+"/register" , body)
  }
}
