import { LoginService } from './../login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    "name": '',
    "birth": '',
    "email": '',
    "mobile":'',
    "password": '',
    "address": ''
  }

  
  constructor(private router: Router,private service:LoginService) { }

  ngOnInit(): void {
  }

  onSignup(){
    let observableResult = this.service.addUser(this.user);
    observableResult.subscribe((result: any) => {
      this.router.navigate(['']);
    });

  }
  onCancel(){
    this.router.navigate(['']);
  }
}
