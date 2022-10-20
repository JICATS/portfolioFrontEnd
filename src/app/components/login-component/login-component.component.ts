import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/Client';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  
  usuario: string="";
  nombre: string="";
  secretpassword: string="";

  binUsuario: string="";
  binNombre:string="";
  binSecretpassword:string="";


  form = new FormGroup({
    'user': new FormControl('',Validators.required),
    'name': new FormControl('',Validators.required),
    'hidepassword': new FormControl('',Validators.required),

  });

  get user(){
    return this.form.get('user') as FormControl;
  }

  get name(){
    return this.form.get('name') as FormControl;
  }
  
  get hidepassword(){
    return this.form.get('hidepassword') as FormControl;
  }
  clients: Client[] = [];
  constructor(private loginService: LoginServiceService,private router:Router) { }
  ngOnInit(): void {
  }

  crearCuenta(){
    this.router.navigate(['/app-create-user']);
    
  }

  userLogin(){
    const {usuario: usuario, nombre: nombre,secretpassword: secretpassword}=this
    const newClient= {usuario:this.binUsuario , nombre:this.binNombre,secretpassword:this.binSecretpassword} // asignar valor de la variable

    //this.onAddClient.emit(newClient);
    this,this.loginService.loginUser(newClient).subscribe((clients=>
      
      this.clients.push(newClient)
      
       
     ));  
     


     

    
    
    
    
    
    
  }
  

}
