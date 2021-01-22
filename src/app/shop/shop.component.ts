import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShopService } from 'app/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  // shops = [
  //   { "name": "Dr Bike", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://stevesorensenmechanical.com.au/wp-content/uploads/Under-Car-1030x688.jpg"},
  //   { "name": "Clutch & Brake", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2FyB1anzeMWfJ8OoBiiTwUmCKQQTLq3Lfgw&usqp=CAU"},
  //   { "name": "Bike Clinic", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://topmotoric.com/wp-content/uploads/2019/07/services.png"},
  //   { "name": "Mechanic Auto", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://s7d2.scene7.com/is/image/farmers/auto-service-repair-2000x1050?wid=1260"},
  //   { "name": "Bike Guru", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYzHBCgiV9gYWjoFdf0OVdVAqODevYLcRaAQ&usqp=CAU"}
  // ]

  shops = [
    { "name": "", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://stevesorensenmechanical.com.au/wp-content/uploads/Under-Car-1030x688.jpg"},
    { "name": "", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2FyB1anzeMWfJ8OoBiiTwUmCKQQTLq3Lfgw&usqp=CAU"},
    { "name": "", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://topmotoric.com/wp-content/uploads/2019/07/services.png"},
    { "name": "", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://s7d2.scene7.com/is/image/farmers/auto-service-repair-2000x1050?wid=1260"},
    { "name": "", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYzHBCgiV9gYWjoFdf0OVdVAqODevYLcRaAQ&usqp=CAU"}
  ]

  constructor(private router: Router, private shopService:ShopService,private toastr: ToastrService ) { }


  ngOnInit(): void {
    this.getAllShop()
  }

  getAllShop(){
    this.shopService.getAllShops().subscribe(response=>{

     console.log(response[0].ven_id)

      let index=0
     this.shops.map((result)=>{
      // console.log(result.name)
      result.name=response[index].ven_shop_name
      index++
     })
  
 
})

  }


  


  onEdit(shop)
{
  console.log(shop.name)
   this.router.navigate(["/shop-detail"], {queryParams:{id:shop['name']}})

}

}
