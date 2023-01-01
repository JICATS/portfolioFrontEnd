
import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { Experiencia } from 'src/app/Experiencia';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NgbdModalContentAddExp } from '../add-experience/add-experience.component';


@Component({
  selector: 'ngbd-modal-content-DeleExp',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Eliminar experiencia</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    
      <form>
        <div class="form-group"  >
          <label>Seleccion el item que desea eliminar</label>
            <select  [(ngModel)]="selectedService" name="binTipo" id="binProyectoID" (change)="onChange()">
              <option value="" disabled selected>Seleccione el item a eliminar </option>
              <option *ngFor="let item of lista" [ngValue]="item" > {{item.puesto}} </option>
            </select>
            <br>
          <input type="hidden" id="binId" [(ngModel)]="selectedService.id" name="binId">
          <label >Puesto</label>
          <input readonly [(ngModel)]="selectedService.puesto" id="binPuesto" class="form-control form-control-sm" type="text"   name="binPuesto" >
          <label>Descripción</label>
          <input readonly [(ngModel)]="selectedService.descripcion" id="binDescripcion" class="form-control form-control-sm" type="text"  name="binDescripcion" >
          <label>Periodo</label>
          <input readonly [(ngModel)]="selectedService.periodo" id="binPeriodo" class="form-control form-control-sm" type="text"   name="binPeriodo" >
        </div>
      </form>
      
    
    <div class="modal-footer">
      
      <button type="button" class="btn btn-danger" (click)="delExperience()">Eliminar</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
      
      
    </div>
  `
})
export class NgbdModalContentDelExp {
  @Input() name:string="";

  id:string="";
  usuario:string="";
  puesto:string="";
  descripcion:string="";
  periodo:string="";
  selectedService:any;
  

  

  lista:Experiencia[]=[];

  ngOnInit(): void {
    this.selectedService = new Object();

    this.loginService.getExperienceById(this.id).subscribe((data=>{
      
      this.lista=data
      
      
    }));
   
  }
  onChange(){
    const {id:id,usuario:usuario,descripcion: descripcion,puesto: puesto,periodo:periodo}=this
    
    const newObject={
      id: (<HTMLInputElement>document.getElementById("binProyectoID")).value,
      
      usuario:usuario,
      descripcion:descripcion,
      puesto:puesto,
      periodo:periodo,
      
      


    }
    
    this.loginService.getExperienceById(id).subscribe((data=>{
      
      this.lista=data
      
      
      
      
      
    }));

  }

  
      
      
      
      

  
  
  delExperience(){

    const {id:id,usuario:usuario,puesto: puesto,descripcion: descripcion,periodo:periodo}=this
    const newExperience= {
      id:(<HTMLInputElement>document.getElementById("binId")).value,
      usuario:usuario,
      puesto:(<HTMLInputElement>document.getElementById("binPuesto")).value,
      descripcion:(<HTMLInputElement>document.getElementById("binDescripcion")).value,
      periodo:(<HTMLInputElement>document.getElementById("binPeriodo")).value
    }

    

    this,this.loginService.delExp(newExperience.id).subscribe((lista=>
      this.lista.push(newExperience)
      
       
     ));   
     alert("Exito! Datos cargados correctamente");
    
    this.activeModal.close();
    location.reload();
    
    
  }
  

  constructor(public activeModal: NgbActiveModal, private loginService:LoginServiceService) {}
}

