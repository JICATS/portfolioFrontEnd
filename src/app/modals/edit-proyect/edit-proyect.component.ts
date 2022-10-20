import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert';

import { LoginServiceService } from 'src/app/services/login-service.service';

import { Proyectos } from 'src/app/Proyectos';



@Component({
  selector: 'ngbd-modal-content-proyect-app',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Proyectos</h4>
      
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    
      <form>

        <div class="form-group" >
          
        <label>Seleccion el item que desea modificar</label>
            <select  [(ngModel)]="selectedService" name="binTipo" id="binProyectoID" (change)="onChange()">
              <option value="" disabled selected>Seleccione el item a modificar </option>
              <option *ngFor="let item of lista" [ngValue]="item" > {{item.nombre}} </option>
            </select>
            <br>
          <input type="hidden" id="binId" [(ngModel)]="selectedService.id" name="binId">
          <label>Nombre del Proyecto</label>
          <input [(ngModel)]="selectedService.nombre" id="binProyecto" class="form-control form-control-sm" type="text" placeholder="Nombre del proyecto" name="binProyecto" >
          <label>Descripción</label>
          <input [(ngModel)]="selectedService.descripcion" id="binDescripcion" class="form-control form-control-sm" type="text" placeholder="Descripcion del proyecto" name="binDescripcion" >
          <label>Fecha</label>
          <input [(ngModel)]="selectedService.fecha" id="binFecha" class="form-control form-control-sm" type="text" placeholder="Fecha de realizacion del proyecto" name="binFecha" >
          <label>Comprobacion</label>
          <input [(ngModel)]="selectedService.link" id="binLink" class="form-control form-control-sm" type="text" placeholder="Link del proyecto" name="binLink" >
          <label>Imagen</label>
          <input [(ngModel)]="selectedService.url" id="binUrl" class="form-control form-control-sm" type="text" placeholder="url del certificado" name="binUrl" >
          
          
        </div>
      </form>
      
    
    <div class="modal-footer">
      
      <button type="button" class="btn btn-outline-dark" (click)="editProyecto()">Guardar</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      
      
    </div>
  `
})
export class NgbdModalContentEditProyect {
  @Input() name:string="";

  id:string="";
  nombre:string="";
  descripcion:string="";
  fecha:string="";
  link:string="";
  url:string="";
  selectedService:any;

  lista:Proyectos[]=[];
  
  

  

  

  

  ngOnInit(): void {

    this.selectedService = new Object();

    this.loginService.getProyectosByID(this.id).subscribe((data=>{
      
      this.lista=data
      
      
    }));

    
  }

  onChange(){
    const {id:id,nombre:nombre,descripcion: descripcion,fecha: fecha,link:link,url:url}=this
    
    const newObject={
      id: (<HTMLInputElement>document.getElementById("binProyectoID")).value,
      
      nombre:nombre,
      descripcion:descripcion,
      fecha:fecha,
      link:link,
      url:url
      


    }
    
    this.loginService.getProyectosByID(id).subscribe((data=>{
      
      this.lista=data
      
      
      
      
      
    }));

  }
  

  
  
  
  editProyecto(){

    const {id:id,nombre:nombre,fecha: fecha,descripcion: descripcion,link:link,url:url}=this
    const newProyecto= {
      id:(<HTMLInputElement>document.getElementById("binId")).value,
      nombre:(<HTMLInputElement>document.getElementById("binProyecto")).value,
      fecha:(<HTMLInputElement>document.getElementById("binFecha")).value,
      
      descripcion:(<HTMLInputElement>document.getElementById("binDescripcion")).value,
      link:(<HTMLInputElement>document.getElementById("binLink")).value,
      url: (<HTMLInputElement>document.getElementById("binUrl")).value
      
    }

    

    this,this.loginService.editProyect(newProyecto).subscribe((lista=>
      this.lista.push(newProyecto)
      
       
     ));   
     swal("Exito!", "Datos cargados correctamente", "success");
    
    this.activeModal.close();
    location.reload();
    
    
    
    
  }
  

  constructor(public activeModal: NgbActiveModal, private loginService:LoginServiceService) {}
}
