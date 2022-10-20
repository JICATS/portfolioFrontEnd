import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MainDatos } from 'src/app/MainDatos';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-datos-basic',
  templateUrl: './datos-basic.component.html',
  styleUrls: ['./datos-basic.component.css']
})
export class DatosBasicComponent implements OnInit {

  lista:MainDatos[]=[];
  cookieState:boolean=false;

  constructor(private loginService:LoginServiceService,private cookie:CookieService) { }

  ngOnInit(): void {
    this.loginService.getMainDatos().subscribe((data=>{
      
      this.lista=data
      
      
    }));

    if(this.cookie.check("usuario")){
      this.cookieState=true;
    }
    else{
      this.cookieState=false;
    }
  }
  

}
