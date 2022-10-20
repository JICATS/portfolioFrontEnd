import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert';
import { Habilidad } from 'src/app/Habilidad';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NgbdModalContent3 } from '../add-education/add-education.component';
import { NgbdModalContent4 } from '../delete-education/delete-education.component';
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
          
          
          <input type="hidden" id="binId">
          <label>Nombre del Proyecto</label>
          <input id="binProyecto" class="form-control form-control-sm" type="text" placeholder="Nombre del proyecto" name="binProyecto" >
          <label>Descripción</label>
          <input id="binDescripcion" class="form-control form-control-sm" type="text" placeholder="Descripcion del proyecto" name="binDescripcion" >
          <label>Fecha</label>
          <input id="binFecha" class="form-control form-control-sm" type="text" placeholder="Fecha de realizacion del proyecto" name="binFecha" >
          <label>Comprobacion</label>
          <input id="binLink" class="form-control form-control-sm" type="text" placeholder="Link del proyecto" name="binLink" >
          <label>Imagen</label>
          <input id="binUrl" class="form-control form-control-sm" type="text" placeholder="url del certificado" name="binUrl" >
          
          
        </div>
      </form>
      
    
    <div class="modal-footer">
      
      <button type="button" class="btn btn-outline-dark" (click)="addProyecto()">Guardar</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      
      
    </div>
  `
})
export class NgbdModalContentAddProyect {
  @Input() name:string="";

  id:string="";
  nombre:string="";
  descripcion:string="";
  fecha:string="";
  link:string="";
  url:string="";
  
  
  

  

  

  lista:Proyectos[]=[];

  ngOnInit(): void {

    
  }
  

  
  
  
  addProyecto(){

    const {id:id,nombre:nombre,fecha: fecha,descripcion: descripcion,link:link,url:url}=this
    const newProyecto= {
      id:id,
      nombre:(<HTMLInputElement>document.getElementById("binProyecto")).value,
      fecha:(<HTMLInputElement>document.getElementById("binFecha")).value,
      
      descripcion:(<HTMLInputElement>document.getElementById("binDescripcion")).value,
      link:(<HTMLInputElement>document.getElementById("binLink")).value,
      url: (<HTMLInputElement>document.getElementById("binUrl")).value
      
    }

    

    this,this.loginService.addProyect(newProyecto).subscribe((lista=>
      this.lista.push(newProyecto)
      
       
     ));   
     swal("Exito!", "Datos cargados correctamente", "success");
    
    this.activeModal.close();
    location.reload();
    
    
    
  }
  

  constructor(public activeModal: NgbActiveModal, private loginService:LoginServiceService) {}
}


