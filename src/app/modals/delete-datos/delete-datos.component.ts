import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert';

import { LoginServiceService } from 'src/app/services/login-service.service';


import { MainDatos } from 'src/app/MainDatos';



@Component({
  selector: 'ngbd-modal-content-datos-app',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Eliminar Datos Principales</h4>
      
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    
      <form>

        <div class="form-group" >
          
        <label>Seleccion el item que desea eliminar</label>
            <select  [(ngModel)]="selectedService" name="binTipo" id="binProyectoID" (change)="onChange()">
              <option value="" disabled selected>Seleccione el item a eliminar </option>
              <option *ngFor="let item of lista" [ngValue]="item" > {{item.profesion}} </option>
            </select>
            <br>
          <input type="hidden" id="binId" [(ngModel)]="selectedService.id" name="binId">
          <label>Profesion</label>
          <input readonly [(ngModel)]="selectedService.profesion" id="binProfesion" class="form-control form-control-sm" type="text" placeholder="Profesion principal" name="binProfesion" >
          <label>Descripción</label>
          <input readonly [(ngModel)]="selectedService.descripcion" id="binDescripcion" class="form-control form-control-sm" type="text" placeholder="Descripcion el nombre del titulo adquirido" name="binDescripcion" >
          <label>Puesto</label>
          <input readonly [(ngModel)]="selectedService.puesto" id="binPuesto" class="form-control form-control-sm" type="text" placeholder="Puesto de trabajo actual" name="binPuesto" >
          <label>Periodo</label>
          <input readonly [(ngModel)]="selectedService.periodo" id="binPeriodo" class="form-control form-control-sm" type="text" placeholder="Periodo ej: 2000/Presente" name="binPeriodo" >
          
          
          
        </div>
      </form>
      
    
    <div class="modal-footer">
      
      <button type="button" class="btn btn-danger" (click)="deleteMainDatos()">Eliminar</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      
      
    </div>
  `
})
export class NgbdModalContentDeleteMainData {
  @Input() name:string="";

  id:string="";
  profesion:string="";
  descripcion:string="";
  puesto:string="";
  periodo:string="";
  
  selectedService:any;

  lista:MainDatos[]=[];
  
  

  

  

  

  ngOnInit(): void {

    this.selectedService = new Object();

    this.loginService.getMainDataById(this.id).subscribe((data=>{
      
      this.lista=data
      
      
    }));

    
  }

  onChange(){
    const {id:id,profesion:profesion,descripcion: descripcion,puesto: puesto,periodo:periodo}=this
    
    const newObject={
      id: (<HTMLInputElement>document.getElementById("binProyectoID")).value,
      
      profesion:profesion,
      descripcion:descripcion,
      puesto:puesto,
      periodo:periodo,
      
      


    }
    
    this.loginService.getMainDataById(id).subscribe((data=>{
      
      this.lista=data
      
      
      
      
      
    }));

  }
  

  
  
  
  deleteMainDatos(){

    const {id:id,profesion:profesion,descripcion: descripcion,puesto:puesto,periodo:periodo}=this
    const newMainData= {
      id:(<HTMLInputElement>document.getElementById("binId")).value,
      profesion:(<HTMLInputElement>document.getElementById("binProfesion")).value,
      descripcion:(<HTMLInputElement>document.getElementById("binDescripcion")).value,
      puesto:(<HTMLInputElement>document.getElementById("binPuesto")).value,
      periodo: (<HTMLInputElement>document.getElementById("binPeriodo")).value
      
    }

    

    this,this.loginService.deleteMainData(newMainData.id).subscribe((lista=>
      this.lista.push(newMainData)
      
       
     ));   
     swal("Exito!", "Datos cargados correctamente", "success");
    
    this.activeModal.close();
    location.reload();
    
    
    
    
  }
  

  constructor(public activeModal: NgbActiveModal, private loginService:LoginServiceService) {}
}

