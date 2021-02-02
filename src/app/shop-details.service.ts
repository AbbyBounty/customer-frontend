import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopDetailsService {

  url=`http://localhost:4000/shop`


  constructor( private httpClient: HttpClient) { }

  getShopDetails(id){
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    return this.httpClient.get(this.url+'/details/'+id, httpOptions)
  
   }

   getServices(id){
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    return this.httpClient.get(this.url+"/services/"+id, httpOptions)
  
   }

   getVendorDetails(id){
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    return this.httpClient.get(this.url+'/shop-details/'+id, httpOptions)
  
   }

   
}
