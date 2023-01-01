import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';


import { LoginServiceService } from 'src/app/services/login-service.service';
import { NgbdModalContent3 } from '../add-education/add-education.component';
import { NgbdModalContent4 } from '../delete-education/delete-education.component';
import { Habilidad } from 'src/app/Habilidad';



@Component({
  selector: 'ngbd-modal-content-delete',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Educación</h4>
      
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    
      <form>

          <div class="form-group">
            <label>Seleccion el item que desea eliminar</label>
            <select  [(ngModel)]="selectedService" name="binTipo" id="binHabilidadID" (change)="onChange()">
              <option value="" disabled selected>Seleccione el item a eliminar </option>
              <option *ngFor="let item of lista" [ngValue]="item" > {{item.habilidad}} </option>
            </select>
            <br>
            <input class="form-control form-control-sm" [(ngModel)]="selectedService.id" id="binId" type="hidden" name="binId">
            <label>Tipo de habilidad</label>
            <input readonly class="form-control form-control-sm" [(ngModel)]="selectedService.tipo" id="binTipos" type="text" name="binTipo">
            <label>Nombre de habilidad</label>
            <input readonly class="form-control form-control-sm" [(ngModel)]="selectedService.habilidad" id="binHabilidad" type="text" name="binTitulos">
            <label>Grado de habilidad</label>
            <input readonly class="form-control form-control-sm" [(ngModel)]="selectedService.grado" id="binGrado" type="text" name="binInstituciones">
          </div>

        
      </form>
      
    
    <div class="modal-footer">
      
      <button type="button" class="btn btn-danger" (click)="deleteSkills()">Eliminar</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
      
      
    </div>
  `
})
export class NgbdModalContentDelete {
  @Input() name:string="";

  id:string="";
  usuario:string="";
  tipo:string="";
  habilidad:string="";
  grado:string="";
  
  selectedService:any;
  

  

  

  lista:Habilidad[]=[];

  ngOnInit(): void {

    this.selectedService = new Object();

    this.loginService.getHabilidadByID(this.id).subscribe((data=>{
      
      this.lista=data
      
      
    }));
   
  }
  onChange(){
    const {id:id,usuario:usuario,tipo: tipo,habilidad: habilidad,grado:grado}=this
    
    const newObject={
      id: (<HTMLInputElement>document.getElementById("binHabilidadID")).value,
      
      usuario:usuario,
      tipo:tipo,
      habilidad:habilidad,
      grado:grado
      


    }
    
    this.loginService.getHabilidadByID(id).subscribe((data=>{
      
      this.lista=data
      
      
      
      
      
    }));

  }

  
  
  
  deleteSkills(){

    const {id:id,usuario:usuario,tipo: tipo,habilidad: habiliad,grado:grado}=this
    const newHabilidad= {
      id:(<HTMLInputElement>document.getElementById("binId")).value,
      usuario:usuario,
      tipo:(<HTMLInputElement>document.getElementById("binTipos")).value,
      
      habilidad:(<HTMLInputElement>document.getElementById("binHabilidad")).value,
      grado:(<HTMLInputElement>document.getElementById("binGrado")).value
      
    }

    

    this,this.loginService.deleteSkill(newHabilidad.id).subscribe((lista=>
      this.lista.push(newHabilidad)
      
       
     ));   
     alert("Exito! Datos cargados correctamente");
    
    this.activeModal.close();
    location.reload();
    
    
    
  }
  

  constructor(public activeModal: NgbActiveModal, private loginService:LoginServiceService) {}
}

