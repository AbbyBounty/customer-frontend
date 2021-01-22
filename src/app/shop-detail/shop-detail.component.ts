import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {

  shops = [
    { "name": "", "description": "industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and","rating":"2","image":"https://stevesorensenmechanical.com.au/wp-content/uploads/Under-Car-1030x688.jpg"}
    
  ]

   services =[

    { "id":1	,"Name":"Full body service",	"Price":1200},
    { "id":2	,"Name":"Oil Change",	"Price":1200},
    { "id":3	,"Name":"Washing",	"Price":1200},
    { "id":4	,"Name":"Air",	"Price":1200}
 
   ];



  constructor(private router: Router,private toastr: ToastrService,private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

  const name = this.activatedRoute.snapshot.queryParams['id']
  console.log("shop-detail-name"+name)
  this.shops[0].name=name

  }


  onEdit(shop)
{
   this.router.navigate(['/shop-detail'],{queryParams:{id:shop['name']}})

}
}
