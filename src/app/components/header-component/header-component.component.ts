import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  valid:boolean=false;
  cookieState:boolean=false;

  constructor(private route:Router,private cookie:CookieService) { }

  ngOnInit(): void {

    this.cookieState=this.cookie.check("usuario");

  }

  login(){
    if(this.cookie.check("usuario")){
      this.cookie.delete("usuario");
      location.reload();
    }
    else{

      this.route.navigate(['/app-login-component'])

    }
    
    
  }

}
