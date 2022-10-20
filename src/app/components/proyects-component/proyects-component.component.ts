import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Proyectos } from 'src/app/Proyectos';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-proyects-component',
  templateUrl: './proyects-component.component.html',
  styleUrls: ['./proyects-component.component.css']
})
export class ProyectsComponentComponent implements OnInit {

  lista:Proyectos[]=[];
  cookieState:boolean=false;

  constructor(private loginService:LoginServiceService,private cookie:CookieService) { }

  ngOnInit(): void {
    this.loginService.getProyectos().subscribe((data=>{
      
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
