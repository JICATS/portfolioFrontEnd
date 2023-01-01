import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { Habilidad } from 'src/app/Habilidad';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NgbdModalContent3 } from '../add-education/add-education.component';
import { NgbdModalContent4 } from '../delete-education/delete-education.component';
import { Proyectos } from 'src/app/Proyectos';
import { MainDatos } from 'src/app/MainDatos';



@Component({
  selector: 'ngbd-modal-content-datos-app',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Datos Principales</h4>
      
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    
      <form>

        <div class="form-group" >
          
          
          
          <label>Profesión</label>
          <input id="binProfesion" class="form-control form-control-sm" type="text" placeholder="Ingresa tu profesion principal" name="binProfesion" >
          <label>Nombre del Titulo</label>
          <input id="binDescripcion" class="form-control form-control-sm" type="text" placeholder="Nombre del titulo adquirido" name="binDescripcion" >
          <label>Puesto de trabajo actual</label>
          <input id="binPuesto" class="form-control form-control-sm" type="text" placeholder="Ingresa el nombre del puesto en el que te desempeñas" name="binPuesto" >
          <label>Periodo</label>
          <input id="binPeriodo" class="form-control form-control-sm" type="text" placeholder="ingresa el periodo: ej: 2000/Presente" name="binPeriodo" >
          
          
          
        </div>
      </form>
      
    
    <div class="modal-footer">
      
      <button type="button" class="btn btn-outline-dark" (click)="addMainDatos()">Guardar</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
      
      
    </div>
  `
})
export class NgbdModalContentAddMainDatos {
  @Input() name:string="";

  id:string="";

  profesion:string="";
  
  descripcion:string="";
  puesto:string="";
  periodo:string="";
  
  
  
  

  

  

  lista:MainDatos[]=[];

  ngOnInit(): void {

    
  }
  

  
  
  
  addMainDatos(){

    const {id:id,profesion:profesion,descripcion: descripcion,puesto:puesto,periodo:periodo}=this
    const newDatos= {
      id:id,
      profesion:(<HTMLInputElement>document.getElementById("binProfesion")).value,
      descripcion:(<HTMLInputElement>document.getElementById("binDescripcion")).value,
      puesto:(<HTMLInputElement>document.getElementById("binPuesto")).value,
      periodo: (<HTMLInputElement>document.getElementById("binPeriodo")).value
      
    }

    

    this,this.loginService.addMainData(newDatos).subscribe((lista=>
      this.lista.push(newDatos)
      
       
     ));   
     alert("Exito! Datos cargados correctamente");
    
    this.activeModal.close();
    location.reload();
    
    
    
  }
  

  constructor(public activeModal: NgbActiveModal, private loginService:LoginServiceService) {}
}


