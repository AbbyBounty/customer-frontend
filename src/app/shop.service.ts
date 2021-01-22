import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  url=`http://localhost:9000/vendor/shops`
  constructor(private httpClient:HttpClient) { }

  getAllShops(){
    return this.httpClient.get(this.url)
  }
}
