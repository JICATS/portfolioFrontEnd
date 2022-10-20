import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { Experiencia } from 'src/app/Experiencia';
import { LoginServiceService } from 'src/app/services/login-service.service';


@Component({
  selector: 'ngbd-modal-content-addExp',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Agregar Experiencia</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    
      <form>
        <div class="form-group"  >
          
            
          
          <label >Puesto</label>
          <input [(ngModel)]="selectedService.puesto" id="binPuesto" class="form-control form-control-sm" type="text"   name="binPuesto" >
          <label>Descripción</label>
          <input [(ngModel)]="selectedService.descripcion" id="binDescripcion" class="form-control form-control-sm" type="text"  name="binDescripcion" >
          <label>Periodo</label>
          <input [(ngModel)]="selectedService.periodo" id="binPeriodo" class="form-control form-control-sm" type="text"   name="binPeriodo" >
        </div>
      </form>
      
    
    <div class="modal-footer">
      
      <button type="button" class="btn btn-outline-dark" (click)="addExperience()">Save</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      
      
    </div>
  `
})
export class NgbdModalContentAddExp {
  @Input() name:string="";

  id:string="";
  usuario:string="";
  puesto:string="";
  descripcion:string="";
  periodo:string="";
  selectedService:any;
  

  

  lista:Experiencia[]=[];

  ngOnInit(): void {
    
  }
  
  addExperience(){

    const {id:id,usuario:usuario,puesto: puesto,descripcion: descripcion,periodo:periodo}=this
    const newExperience= {
      id:id,
      usuario:usuario,
      puesto:(<HTMLInputElement>document.getElementById("binPuesto")).value,
      descripcion:(<HTMLInputElement>document.getElementById("binDescripcion")).value,
      periodo:(<HTMLInputElement>document.getElementById("binPeriodo")).value
    }

    

    this,this.loginService.addExperiencia(newExperience).subscribe((lista=>
      this.lista.push(newExperience)
      
       
     ));   
     alert("Exito! Datos cargados correctamente");
    
    this.activeModal.close();
    location.reload();
    
    
  }
  

  constructor(public activeModal: NgbActiveModal, private loginService:LoginServiceService) {}
}
