import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='http://localhost:8080/user/profile'
  constructor(private router: Router,
    private httpClient: HttpClient) { }

    getUser(){
      const userid=sessionStorage.getItem('id')
  
  
      return this.httpClient.get(this.url+"/"+userid)
      
    }

    updateUser(u_first_name:string,u_last_name:string,u_email:string,u_mobile:string, u_address:string){
      const userid=sessionStorage.getItem('id')
    
      const httpOptions = {
       headers: new HttpHeaders({
        //  token: sessionStorage['token']
       })
     };
  
     const body = {
       u_id:userid,
      u_first_name:u_first_name,
      u_last_name:u_last_name,
      u_email:u_email,
      u_mobile:u_mobile,
      u_address:u_address,
     
      
     }
     
     return this.httpClient.put(this.url , body, httpOptions)


    }

}
