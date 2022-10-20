import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Client } from 'src/app/Client';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent implements OnInit {
  id:string="";
  lista:Client[]=[];
  fileToUpload: File = null as any;
  imageUrl: string = "/assets/img/perfil.jpg";
  cameraState:boolean=false;
  cookieState:boolean=false;
  

  constructor(private loginService: LoginServiceService,private cookie:CookieService) { }

  ngOnInit(): void {
    this.cameraState=false;
    this.loginService.getUser().subscribe((data=>{
      
      this.lista=data
      
      
    }));
    if(this.cookie.check("usuario")){
      this.cookieState=true;
    }
    else{
      this.cookieState=false;
    }
  }
  valid(){
    if(this.cameraState){
      this.cameraState=false;
    }
    else{
      this.cameraState=true;
    }
    
    
    
  }
  
  handleFileInput(file:FileList){
    this.fileToUpload = file.item(0) as File;
    //show image preview
    var reader = new FileReader();
    reader.onload= (event:any)=>{
      this.imageUrl= event.target.result;
      
      
    }
    reader.readAsDataURL(this.fileToUpload);
    
    

  } 

}
