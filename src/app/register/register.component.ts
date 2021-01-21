import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'app/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    "u_first_name": "",
    "u_last_name": "",
    "u_email": "",
    "u_mobile": "",
    "u_address": "",
    "u_password": ""
  }

  
  constructor(private router: Router,private registerComponent:RegisterService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSignup(){
    let observableResult = this.registerComponent.register(this.user);
    observableResult.subscribe((result: any) => {

      this.toastr.success(' Registration Succesfully  Please Login ..','',{
        positionClass:'toast-top-left',
        closeButton:true,
        progressAnimation:'decreasing',
        titleClass:'toast-title'
      })
      this.router.navigate(['/login']);
    });

  }
  onCancel(){
    this.router.navigate(['/login']);
  }
}
