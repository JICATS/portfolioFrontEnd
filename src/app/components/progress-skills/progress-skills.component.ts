import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/Habilidad';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-progress-skills',
  templateUrl: './progress-skills.component.html',
  styleUrls: ['./progress-skills.component.css']
})
export class ProgressSkillsComponent implements OnInit {
  id:string="";
  usuario:string="";
  tipo:string="";
  habilidad:string="";
  grado:string="";
  
  selectedService:any;
  

  

  

  lista:Habilidad[]=[];


  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
    this.loginService.getHabilidadByID(this.id).subscribe((data=>{
      
      this.lista=data
      
      
    }));
  }

}
