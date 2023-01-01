
import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { Educacion } from 'src/app/Educacion';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NgbdModalContent3 } from '../add-education/add-education.component';
import { NgbdModalContent4 } from '../delete-education/delete-education.component';



@Component({
  selector: 'ngbd-modal-content1',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Educación</h4>
      
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    
      <form>

          <div class="form-group">
            <label>Seleccion el item que desea modificar</label>
            <select  [(ngModel)]="selectedService" name="binTipo" id="binTituloID" (change)="onChange()">
              <option value="" disabled selected>Seleccione el item a modificar </option>
              <option *ngFor="let item of lista" [ngValue]="item" > {{item.titulo}} </option>
            </select>
            <br>
            <input class="form-control form-control-sm" [(ngModel)]="selectedService.id" id="binId" type="hidden" name="binId">
            <label>Titulo</label>
            <input class="form-control form-control-sm" [(ngModel)]="selectedService.tipo" id="binTipos" type="text" name="binTipo">
            <label>Nombre del Titulo/Curso</label>
            <input class="form-control form-control-sm" [(ngModel)]="selectedService.titulo" id="binTitulos" type="text" name="binTitulos">
            <label>Periodo</label>
            <input class="form-control form-control-sm" [(ngModel)]="selectedService.periodo" id="binPeriodos" type="text" name="binPeriodos">
            <label>Nombre de la Institución</label>
            <input class="form-control form-control-sm" [(ngModel)]="selectedService.institucion" id="binInstituciones" type="text" name="binInstituciones">
          </div>

        
      </form>
      
    
    <div class="modal-footer">
      
      <button type="button" class="btn btn-outline-dark" (click)="addEducation()">Modificar</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
      
      
    </div>
  `
})
export class NgbdModalContent1 {
  @Input() name:string="";

  id:string="";
  usuario:string="";
  tipo:string="";
  titulo:string="";
  periodo:string="";
  institucion:string="";
  selectedService:any;
  

  

  

  lista:Educacion[]=[];

  ngOnInit(): void {

    this.selectedService = new Object();

    this.loginService.getEducationById(this.id).subscribe((data=>{
      
      this.lista=data
      
      
    }));
   
  }
  onChange(){
    const {id:id,usuario:usuario,tipo: tipo,titulo: titulo,periodo:periodo,institucion:institucion}=this
    
    const newObject={
      id: (<HTMLInputElement>document.getElementById("binTituloID")).value,
      
      usuario:usuario,
      tipo:tipo,
      titulo:titulo,
      periodo:periodo,
      institucion:institucion


    }
    
    this.loginService.getEducationById(id).subscribe((data=>{
      
      this.lista=data
      
      
      
      
      
    }));

  }

  
  
  
  addEducation(){

    const {id:id,usuario:usuario,tipo: tipo,titulo: titulo,periodo:periodo,institucion:institucion}=this
    const newEducation= {
      id:(<HTMLInputElement>document.getElementById("binId")).value,
      usuario:usuario,
      tipo:(<HTMLInputElement>document.getElementById("binTipos")).value,
      
      titulo:(<HTMLInputElement>document.getElementById("binTitulos")).value,
      periodo:(<HTMLInputElement>document.getElementById("binPeriodos")).value,
      institucion:(<HTMLInputElement>document.getElementById("binInstituciones")).value
    }

    

    this,this.loginService.addEdu(newEducation).subscribe((lista=>
      this.lista.push(newEducation)
      
       
     ));   
     alert("Exito! Datos cargados correctamente");
    
    this.activeModal.close();
    location.reload();
    
    
    
  }
  

  constructor(public activeModal: NgbActiveModal, private loginService:LoginServiceService) {}
}

@Component({selector: 'ngbd-modal-component1', templateUrl: './education-modal.component.html'})
export class NgbdModalComponent1 {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent1);
    
    
    
  }
  openAdd(){
    const modalAddref = this.modalService.open(NgbdModalContent3);
  }
  openDel(){
    const modalAddref = this.modalService.open(NgbdModalContent4);
  }
  
 
}