import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Client } from 'src/app/Client';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Storage,ref,uploadBytes } from '@angular/fire/storage';


@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent implements OnInit {
  id:string="";
  lista:Client[]=[];
  fileToUpload: File = null as any;
  imageUrl: string = "https://firebasestorage.googleapis.com/v0/b/frontendpruebas-e410e.appspot.com/o/perfil.jpg?alt=media&token=62df4065-a253-4921-84d5-4d19eff48b72";
  cameraState:boolean=false;
  cookieState:boolean=false;
  inputFile:boolean=false;
  

  constructor(private loginService: LoginServiceService,private cookie:CookieService,private storage:Storage) { }

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
    this.inputFile=true;
    console.log(this.fileToUpload)
    
    
    
    

  } 
  uploadProfilePic($event:any){

    const file=this.fileToUpload
    
    const imgRef= ref(this.storage,"perfil.jpg");
    uploadBytes(imgRef,file)
      .then(response=>console.log(response))
      .catch(error=> console.log(error));
    alert("Foto de Perfil Actualizada con exito!")
    this.cameraState=false;
    


    


  }

}
