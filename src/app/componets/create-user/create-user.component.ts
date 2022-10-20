import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/Client';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @Output() onAddClient: EventEmitter<Client>= new EventEmitter;

  

  

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
  constructor(private userService: LoginServiceService,private router:Router) { }
  ngOnInit(): void {
  }

  ver2(){
    const {usuario: usuario, nombre: nombre,secretpassword: secretpassword}=this
    const newClient= {usuario:this.binUsuario , nombre:this.binNombre,secretpassword:this.binSecretpassword} // asignar valor de la variable

    this.onAddClient.emit(newClient);
    this,this.userService.addUser(newClient).subscribe((clients=>
      this.clients.push(newClient)
       
     ));  
    alert("Cliente Cargado correctamente!")
    this.router.navigate(['/app-login-component']);
    
    
    
  }

}
