import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  url=`http://localhost:4000/order`

  addOrder() {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    const u_id = sessionStorage.getItem('id')
    const v_id = sessionStorage.getItem('selectedVehicle')
    const ven_id = sessionStorage.getItem('shop')

    const body = {
      v_id:v_id,
      ven_id:ven_id
    }

    return this.httpClient.post(this.url + "/add", body, httpOptions)
  }
}
