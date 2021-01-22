import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{


   user:any=[]
  
   
   u_first_name=""
   u_last_name=""
   u_email=""
   u_mobile="" 
   u_address=""
  

   constructor(private router: Router, private userService:UserService,private toastr: ToastrService ) { }


    ngOnInit(){
        this.onload()

    }


    onload(){

        this.userService.getUser().subscribe(response=>{
            this.user=response
            // console.log(response)
     })

    }


    onUpdate(){
        
        
   console.log(this.user['u_first_name'])
      // edit
  
      this.userService
        .updateUser(this.user['u_first_name'], this.user['u_last_name'],this.user['u_email'],this.user['ven_mobile'], this.user['ven_address'])
        .subscribe(response => {
         
   console.log(this.user['u_first_name'])
          console.log(this.u_first_name)
          this.u_first_name=this.user['u_first_name']
          this.u_last_name=this.user['u_last_name']
          this.u_email=this.user['u_email']
          this.u_mobile=this.user['u_mobile']
          this.u_address=this.user['u_address']
         

        //   console.log(this.vehicle['v_id']+vhicle id update)

          // if (response['status'] == 'success') {
           
         
             
            this.router.navigate(['/user'])
          // }
        })
        this.toastr.success(' updated succesfully ','user',{
            positionClass:'toast-top-left',
            closeButton:true,
            progressAnimation:'decreasing',
            titleClass:'toast-title'
          })
     
        console.log(`update profile`)
    }
}
