import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Educacion } from 'src/app/Educacion';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-education-component',
  templateUrl: './education-component.component.html',
  styleUrls: ['./education-component.component.css']
})
export class EducationComponentComponent implements OnInit {

  lista:Educacion[]=[];
  cookieState:boolean=false;

  constructor(private loginService: LoginServiceService,private cookie:CookieService) { }

  ngOnInit(): void {
    this.loginService.getEducation().subscribe((data=>{
      
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
