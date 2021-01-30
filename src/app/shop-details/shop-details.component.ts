import { ToastrService } from 'ngx-toastr';
import { VehicleService } from 'app/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShopDetailsService } from 'app/shop-details.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,private shopDetailsService:ShopDetailsService,private vehicleService:VehicleService,private toastr:ToastrService,private router: Router) { 

    this.form = this.formBuilder.group({
      website: this.formBuilder.array([], [Validators.required])
    })
  }

  allShops=[]
  shops=[]
  vehicles=[]
  v_id=[]
  allServices=[]
  services=[

  ]

 selectedService=[
  {status:true,stv_id:0}
 ]

 selectedVehicle=""

  ngOnInit(): void {
    this.loadShopDetails()
    this.loadServices()
    this.loadMyVehicles()

  }

  loadShopDetails() {
    const id = this.activatedRoute.snapshot.queryParams['id']

    this.shopDetailsService
      .getShopDetails(id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.allShops = response['data']
          this.shops = this.allShops
        }
      })
  }

  loadServices(){
    const id = this.activatedRoute.snapshot.queryParams['id']

    this.shopDetailsService
    .getServices(id)
    .subscribe(response => {
      if (response['status'] == 'success') {
        console.log(response)
        this.allServices = response['data']
        this.services = this.allServices
      }
    })
  }

  loadMyVehicles(){
    this.vehicleService
    .getVehicles()
    .subscribe(response => {
      if (response['status'] == 'success') {
        console.log(response)
        this.vehicles = response['data']
        console.log(this.vehicles)
      } else {
        console.log(response['error'])
      }
    })
  }

  addToCart(service,vehicle){
    const id = this.activatedRoute.snapshot.queryParams['id']

  if(vehicle){
    
      sessionStorage.setItem("selectedVehicle",this.selectedVehicle)
      
    this.router.navigate(['/available-services'],{ queryParams: { id: id } })

  }
  else
  {
    alert('please select vehicle' )
      console.log(this.vehicles)
    
  }
  }

  onService(event){
    console.log(event.target)
  }

 
  addVehicle(){
    this.router.navigate(['/vehicle-list'])
    
  }


  onChangeCategory(event, service: any){ // Use appropriate model type instead of any
    // this.tempArr.brands.push(cat.name);
    console.log(service.stv_id)
  }


  onCheckboxChange(e) {
    const website: FormArray = this.form.get('website') as FormArray;
  
    if (e.target.checked) {
      website.push(new FormControl(e.target.value));
    } else {
       const index = website.controls.findIndex(x => x.value === e.target.value);
       website.removeAt(index);
    }
  }
    
  submit(){
    console.log(this.form.value);
  }

 
}
