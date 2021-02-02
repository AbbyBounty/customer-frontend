import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { VehicleService } from 'app/vehicle.service';
@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {
  vehicle = null

  // v_id       
    // v_company_name                 
    // v_model                        
    // v_reg_no       




    v_company_name = " "
    v_model = " "
    v_reg_no = " "

  id = null
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private vehicleService: VehicleService, private toastr: ToastrService) { }

  


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.queryParams['id']
    console.log('vehicle id= '+id)
    if (id) {
      // edit vehicle
      this.vehicleService
        .getVehicleDetails(id)
        .subscribe(response => {
          if (response['status'] == 'success') {
            console.log(response)
            const vehicles = response['data']
            console.log(vehicles[0])
            if (vehicles.length > 0) {
              
              this.v_company_name = vehicles[0]['v_company_name']
              this.v_model = vehicles[0]['v_model']
              this.v_reg_no = vehicles[0]['v_reg_no']
             
    // v_company_name                 
    // v_model                        
    // v_reg_no       vehicles

             this.vehicle=1
            }
          }
        })
    }

  
  }



  onUpdate() {
    const id = this.activatedRoute.snapshot.queryParams['id']

    if (this.vehicle) {
      // edit
      this.vehicleService
        .updateVehicle(id, this.v_company_name, this.v_model, this.v_reg_no)
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.toastr.warning(' updated succesfully ','mechanic',{
                          positionClass:'toast-top-left',
                          closeButton:true,
                          progressAnimation:'decreasing',
                          titleClass:'toast-title'
                        })
            this.router.navigate(['/vehicle'])
          }
        })
    } else {
      // insert
      this.vehicleService
        .insertVehicle(this.v_company_name, this.v_model, this.v_reg_no)
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.toastr.success(this.v_reg_no+' Vehicle added succesfully ')

            this.router.navigate(['/vehicle'])
          }
        })
    }

  }
}
