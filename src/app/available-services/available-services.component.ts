import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from 'app/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopDetailsService } from 'app/shop-details.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.css']
})
export class AvailableServicesComponent implements OnInit {

  selectedServices: FormGroup;

  serviceTaken=[]
  allServices = []
  services = []
  selectedVehicle=""
  shop=""

  shopDetails=[]
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private shopDetailsService: ShopDetailsService, private vehicleService: VehicleService, private toastr: ToastrService, private router: Router) {
    this.selectedServices = this.formBuilder.group({
      website: this.formBuilder.array([], [Validators.required])
    })
  }

  ngOnInit(): void {
    this.loadServices()
    this.selectedVehicle=sessionStorage.getItem("selectedVehicle")
    this.shop=sessionStorage.getItem("shopDetails")
    console.log(`shop name : `+this.shop)
    this.loadCart()
  }

  loadServices() {
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

  onCheckboxChange(e) {
    const website: FormArray = this.selectedServices.get('website') as FormArray;
  
    if (e.target.checked) {
      website.push(new FormControl(e.target.value));
    } else {
       const index = website.controls.findIndex(x => x.value === e.target.value);
       website.removeAt(index);
    }
  }
    
  submit(){
    console.log(this.selectedServices.value);
    this.serviceTaken=this.selectedServices.value
    sessionStorage.setItem('selectedServices',this.selectedServices.value.website)

  }

  addToCart(service,vehicle){
    const id = this.activatedRoute.snapshot.queryParams['id']

  if(vehicle){
    console.log(service)
      this.toastr.success('Added to Cart  ',this.selectedServices.value.website,{
        positionClass:'toast-top-right',
        closeButton:true,
        progressAnimation:'decreasing',
        titleClass:'toast-title'
      })

      sessionStorage.setItem("selectedVehicle",this.selectedVehicle)

      

  }

  this.shopDetailsService
  .getVendorDetails(id)
  .subscribe(response => {
    if (response['status'] == 'success') {
      console.log(response['data']['ven_shop_name'])
      sessionStorage.setItem("shopDetails",response['data']['ven_shop_name'])
      
    }
  })


}

loadCart(){
  
}

placeOrder(){
  
}
}
