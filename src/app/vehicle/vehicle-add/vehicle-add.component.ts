import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { VehicleService } from './../../vehicle.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {

  vehicle = null;
  
  v_company_name=""
  v_model=""
  v_regNo=""

  id=null
constructor(private activatedRoute: ActivatedRoute,private router: Router, private vehicleService:VehicleService,private toastr: ToastrService) { }

ngOnInit(): void {

  let id = this.activatedRoute.snapshot.queryParams['id']
this.id=id
  console.log(id+'id')
  
   if (id>0) {
    // edit product
    this.vehicleService
      .getVehicleDetails(id)
      .subscribe(response => {
         if (response) {
       
        this.v_company_name=response['v_company_name']
        this.v_model=response['v_model']
        this.v_regNo=response['v_regNo']
        // this.vehicle=response
           const vehicles = response
          // if (vehicles) {
            // this.vehicle = vehicles[0]
            // this.v_company_name = this.vehicle['v_company_name']
            // this.v_model = this.vehicle['v_model']
            // this.v_regNo = this.vehicle['v_regNo']
           this.vehicle=1
          // }
         }
      })
   }
}



   onUpdate() {
     console.log(this.vehicle +"vehicle onupdate")

    if (this.vehicle>0) {
      // edit
     console.log(this.vehicle +"onupdate")

      this.vehicleService
        .updateVehicle(this.id, this.v_company_name,this.v_model,this.v_regNo)
        .subscribe(response => {
         
          // console.log(response)
          // this.v_company_name=this.vehicle['v_company_name']
          // this.v_model=this.vehicle['v_model']
          // this.v_regNo=this.vehicle['v_regNo']

          // console.log(this.vehicle['v_id']+"vhicle id update")

          // if (response['status'] == 'success') {
            this.toastr.warning(' updated succesfully ','vehicle',{
              positionClass:'toast-top-left',
              closeButton:true,
              progressAnimation:'decreasing',
              titleClass:'toast-title'
            })
         
            this.router.navigate(['/vehicle'])
          // }
        })
    } else {
      // insert
      this.vehicleService
        .insertVehicle(this.v_company_name,this.v_model,this.v_regNo)
        .subscribe(response => {
          // if (response['status'] == 'success') {
          
           
          
            this.toastr.success(this.v_regNo+' vehicle added succesfully ')
            this.router.navigate(['/vehicle'])
          // }
        })
    }
  
  }
  
}
