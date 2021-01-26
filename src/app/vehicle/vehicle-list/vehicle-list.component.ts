import { VehicleService } from 'app/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { MechanicService } from 'app/mechanic.service'
//import{VehicleService}from 'app/vehicle.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: any = []
  constructor(private router: Router, private vehicleService: VehicleService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadVehicles()
  }



  loadVehicles() {
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

  onEdit(vehicle) {
    this.router.navigate(['/vehicle-add'], { queryParams: { id: vehicle['v_id'] } })

  }
  

  insertVehicle() {
    this.router.navigate(['/vehicle-add'])
  }


  onDelete(vehicle, index) {
    const result = confirm(`Are you sure you want to delete vehicle: ${vehicle['v_reg_no']}?`)
    if (result) {

      this.vehicleService.deleteVehicle(vehicle['v_id']).subscribe(res => {
        this.toastr.error(' deleted succesfully ', 'vehicle', {
          positionClass: 'toast-top-left',
          closeButton: true,
          progressAnimation: 'decreasing',
          titleClass: 'toast-title'
        })
        this.loadVehicles()
      })
    }
  }
}