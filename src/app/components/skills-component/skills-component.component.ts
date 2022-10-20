import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Habilidad } from 'src/app/Habilidad';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-skills-component',
  templateUrl: './skills-component.component.html',
  styleUrls: ['./skills-component.component.css']
})
export class SkillsComponentComponent implements OnInit {

  lista:Habilidad[]=[];
  cookieState:boolean=false;

  constructor(private loginService: LoginServiceService,private cookie:CookieService) { }

  ngOnInit(): void {
    this.loginService.getHabilidad().subscribe((data=>{
      
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
