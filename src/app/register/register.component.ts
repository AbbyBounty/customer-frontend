import { LoginService } from './../login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {

    "u_first_name":'',
    "u_last_name":'',
    "u_email": '',
    "u_mobile": '',
    "u_password": '',
    "u_address": ''
  }

  
  constructor(private router: Router, private service: LoginService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSignup() {
    console.log(this.user)
    let observableResult = this.service.addUser(this.user);
    observableResult.subscribe((result: any) => {

      console.log(result)
      this.toastr.success(' Registration Succesfully  Please Login ..', '', {
        positionClass: 'toast-top-left',
        closeButton: true,
        progressAnimation: 'decreasing',
        titleClass: 'toast-title'
      })
      this.router.navigate(['/login']);
    });

  }
    onCancel(){
      this.router.navigate(['/login']);
    }
 }

