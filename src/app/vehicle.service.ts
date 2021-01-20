import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  httpClient:HttpClient
  

  url=`http://localhost:8080/user/vehicle`

  constructor(httpClient:HttpClient) { 
    this.httpClient=httpClient
  }


  getVehicles(){
    const userid=sessionStorage.getItem('id')


    return this.httpClient.get('http://localhost:8080/user/vehiclesByUserid/'+userid)
    
  }


  getVehicleDetails(id) {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
      //  token: sessionStorage['token']

     })
   };
  console.log(this.url+"/"+id)

   return this.httpClient.get(this.url  + "/"+id, httpOptions)
  }

  updateVehicle(v_id:number,v_company_name: string, v_model: string, v_regNo: string) {
    // add the token in the request header

    console.log(v_id+"vehicle id")
    const httpOptions = {
     headers: new HttpHeaders({
      //  token: sessionStorage['token']
     })
   };

   const body = {
    v_id:v_id,
    v_company_name: v_company_name,
    v_model: v_model,
    v_regNo: v_regNo,
    
   }
   
   return this.httpClient.put(this.url , body, httpOptions)
 }

 insertVehicle(v_company_name: string, v_model: string, v_regNo: string) {
   // add the token in the request header
   const httpOptions = {
    headers: new HttpHeaders({
      // token: sessionStorage['token']
    })
  };

  const u_id=localStorage.getItem('id')

  const body = {
    v_company_name: v_company_name,
    v_model: v_model,
    v_regNo: v_regNo,
    v_user:{
      u_id:u_id
    }
  }
  
  return this.httpClient.post(this.url + "/create", body, httpOptions)
}

}
