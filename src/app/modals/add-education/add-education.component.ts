import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { Educacion } from 'src/app/Educacion';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NgbdModalContent1 } from '../education-modal/education-modal.component';


@Component({
  selector: 'ngbd-modal-content3',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Educación</h4>
      
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    
      <form>

        <div class="form-group" >
          <label >Curso/Carrera</label>
          <select name="binTipo" id="binTipo">
            <option value="Titulo Universitario">Titulo Universitario</option>
            <option value="Titulo Terciario">Titulo Terciario</option>
            <option value="Titulo Secundario">Titulo Secundario</option>
            <option value="Curso">Curso</option>
            <option value="Seminario">Seminario</option>
            <option value="Taller">Taller</option>
            <option value="Posgrado">Posgrado</option>
          </select>
          
          <label>Título</label>
          <input id="binTitulo" class="form-control form-control-sm" type="text" placeholder="Nombre del Titulo seleccionado" name="binDescripcion" >
          <label>Periodo</label>
          <input id="binPeriodo" class="form-control form-control-sm" type="text"  placeholder="Fecha de inicio y finalizacion" name="binPeriodo" >
          <label>Institución</label>
          <input id="binInstitucion" class="form-control form-control-sm" type="text"  placeholder="Nombre de la institucion otorgante" name="binPeriodo" >
        </div>
      </form>
      
    
    <div class="modal-footer">
      
      <button type="button" class="btn btn-outline-dark" (click)="addEducation()">Guardar</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
      
      
    </div>
  `
})
export class NgbdModalContent3 {
  @Input() name:string="";

  id:string="";
  usuario:string="";
  tipo:string="";
  titulo:string="";
  periodo:string="";
  institucion:string="";

  

  

  lista:Educacion[]=[];

  ngOnInit(): void {

    
   
  }

  
      
      
      
      

  
  
  addEducation(){

    const {id:id,usuario:usuario,tipo: tipo,titulo: titulo,periodo:periodo,institucion:institucion}=this
    const newEducation= {
      id:id,
      usuario:usuario,
      tipo:(<HTMLInputElement>document.getElementById("binTipo")).value,
      titulo:(<HTMLInputElement>document.getElementById("binTitulo")).value,
      periodo:(<HTMLInputElement>document.getElementById("binPeriodo")).value,
      institucion:(<HTMLInputElement>document.getElementById("binInstitucion")).value
    }

    

    this,this.loginService.insertEdu(newEducation).subscribe((lista=>
      this.lista.push(newEducation)
      
       
     ));   
     alert("Exito! Datos cargados correctamente");
    
    this.activeModal.close();
    location.reload();
    
    
    
  }
  

  constructor(public activeModal: NgbActiveModal, private loginService:LoginServiceService) {}
}

@Component({selector: 'ngbd-modal-component3', templateUrl: './add-education.component.html'})
export class NgbdModalComponent3 {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent1);
    
    
    
  }
 
}