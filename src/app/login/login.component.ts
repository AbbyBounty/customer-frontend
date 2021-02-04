import { LoginService } from './../login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''

  constructor(
    private router: Router,
    private loginService:LoginService) {}

  ngOnInit(): void {
  }



 onLogin() {
   console.log("in onlogin fun")
    this.loginService
      .signin(this.email, this.password)
      .subscribe(response => {
        if (response['status'] == 'success') {
          console.log(response['data'])
          // cache the token
          const data =response['data']
          sessionStorage['token'] = data
                     sessionStorage.setItem('firstName', data['u_first_name']);

          this.router.navigate(['/dashboard'])
        } else {
          alert(response['error'])
        }
      })
  }


  
  // onLogin() {
  //   //alert(this.email.length);
  //     if (this.email.length == 0) {
  //       alert('enter email');
  //     } else if (this.password.length ==0) {
  //       alert('enter password');
  //     } else {
  
  //       let observableResult = this.loginService.signin(this.email,this.password);
  //       observableResult.subscribe((result) => {
  //         // console.log(result);
  //         if(result==null) {
  //           alert("invalid login");
  //           this.router.navigate(['']);
  //           console.log(observableResult)
  //         }
  //     else
  //       {
  //         const data=result['data']
  //         sessionStorage['login_status'] = '1';
  //           sessionStorage.setItem('firstname', result['u_first_name']);
  //           sessionStorage.setItem('token', data['token']);
  //           sessionStorage.setItem('id', result['u_id']);
  //           sessionStorage.setItem('flag','true');
  //           console.log("userid"+sessionStorage.getItem('id'))

          

        





          
          
           
           
         

           

  //           // var cart = [];
  //           // if(localStorage.getItem('cart') == null) {
  //           //   localStorage.setItem('cart', JSON.stringify(cart));
  //           //   console.log('added empty cart into local storage');
  //           // }
  //          // this.emtService.navBarSwitch(true);
  //         //  console.log(result)
  //           this.router.navigateByUrl("dashboard");
  //       }
  //     });
        
  //     }
  //   }
  
  
    onSignup() {
      this.router.navigate(['/register']);
    }
    onCancel(){
      this.router.navigate(['']);
    }
}




// @Component({
//   selector: 'app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.css']
// })
// export class SigninComponent implements OnInit {
//   email: string
//   password: string

//   constructor(
//     private router: Router,
//     private service: AuthService) { }

//   ngOnInit(): void {
//   }

//   
//   }

// }
