import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Experiencia } from 'src/app/Experiencia';
import { LoginServiceService } from 'src/app/services/login-service.service';


@Component({
  selector: 'app-experience-component',
  templateUrl: './experience-component.component.html',
  styleUrls: ['./experience-component.component.css']
})
export class ExperienceComponentComponent implements OnInit {

  lista:Experiencia[]=[];
  cookieState:boolean=false;

  

  constructor(private loginService:LoginServiceService,private cookie:CookieService) { }

  ngOnInit(): void {

    this.loginService.getExperiencia().subscribe((data=>{
      
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
