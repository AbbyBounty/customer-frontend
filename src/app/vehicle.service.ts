import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  httpClient: HttpClient


  url = `http://localhost:4000/vehicle`

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getVehicles() {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    return this.httpClient.get(this.url+"/", httpOptions)

  }


  getVehicleDetails(id) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']

      })
    };


    return this.httpClient.get(this.url + "/details/" + id, httpOptions)
  }


  
  deleteVehicle(id) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']

      })
    };
    console.log(this.url + "/delete/" + id)

    return this.httpClient.delete(this.url + "/delete/" + id, httpOptions)
  }



  updateVehicle( v_id : number, v_company_name: string, v_model: string, v_reg_No: string) {
    // add the token in the request header

    console.log( v_id  + " vehicle  id")
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    // v_id       
    // v_company_name                 
    // v_model                        
    // v_reg_no       



    const body = {
      v_id: v_id,
      v_company_name: v_company_name,
      v_model: v_model,
      v_reg_No:v_reg_No

    }

    return this.httpClient.put(this.url + "/create/" + v_id, body, httpOptions)
  }



  insertVehicle(v_company_name: string, v_model: string, v_reg_No: string) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    const u_id = sessionStorage.getItem('id')

    const body = {
      v_company_name: v_company_name,
      v_model: v_model,
      v_reg_No: v_reg_No,
      vehicle_user: {
        u_id: u_id
      }
    }

    return this.httpClient.post(this.url + "/add", body, httpOptions)
  }
}