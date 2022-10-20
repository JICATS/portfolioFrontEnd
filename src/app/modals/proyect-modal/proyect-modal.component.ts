import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { Habilidad } from 'src/app/Habilidad';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NgbdModalContent3 } from '../add-education/add-education.component';
import { NgbdModalContent4 } from '../delete-education/delete-education.component';
import { NgbdModalContentEdit } from '../edit-skill/edit-skill.component';
import { NgbdModalContentDelete } from '../delete-skill/delete-skill.component';
import { Proyectos } from 'src/app/Proyectos';
import { NgbdModalContentAddProyect } from '../add-proyect/add-proyect.component';
import { NgbdModalContentEditProyect } from '../edit-proyect/edit-proyect.component';
import { NgbdModalContentDeleteProyect } from '../delete-proyect/delete-proyect.component';



@Component({
  selector: 'ngbd-modal-content-proyect',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Proyectos</h4>
      
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    
      <form>

        <div class="form-group" >
          <label >Habilidad</label>
          <select name="binTipos" id="binTipos">
            <option value="Idioma">Idioma</option>
            <option value="Oratoria">Oratoria</option>
            <option value="Informatica">Informatica</option>
            <option value="Orientado A Soluciones">Orientado a Soluciones</option>
            <option value="Organizado/a">Organizado/a</option>
            <option value="Trabajo en Equipo">Trabajo en Equipo</option>
            <option value="Redes Sociales">Redes Sociales</option>
            <option value="Capacidad de Direccion">Capacidad de Direccion</option>
          </select>
          
          <label>Nombre de la Habilidad</label>
          <input id="binTitulos" class="form-control form-control-sm" type="text" placeholder="Nombre de la habilidad, Ej: Inglés" name="binDescripcion" >
          <label>Grado de Habilidad</label>
          <select name="binGrado" id="binGrado">
            <option value="Básico">Básico</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
            
          </select>
          
        </div>
      </form>
      
    
    <div class="modal-footer">
      
      <button type="button" class="btn btn-outline-dark" (click)="addProyectos()">Save</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      
      
    </div>
  `
})
export class NgbdModalContentProyect {
  @Input() name:string="";

  id:string="";
  nombre:string="";
  fecha:string="";
  descripcion:string="";
  link:string="";
  url:string="";
  
  selectedService2:any;
  

  

  

  lista:Proyectos[]=[];

  ngOnInit(): void {

    this.selectedService2 = new Object();

    this.loginService.getProyectosByID(this.id).subscribe((data=>{
      
      this.lista=data
      
      
    }));
   
  }
  onChange(){
    const {id:id,nombre:nombre,fecha: fecha,descripcion:descripcion,link:link,url:url}=this
    
    const newObject={
      id: id,
      
      nombre:nombre,
      fecha:(<HTMLInputElement>document.getElementById("binTipos")).value,
      descripcion:(<HTMLInputElement>document.getElementById("binTitulos")).value,
      link:(<HTMLInputElement>document.getElementById("binGrado")).value,
      url:(<HTMLInputElement>document.getElementById("binGrado")).value
      


    }
    
    this.loginService.getProyectosByID(id).subscribe((data=>{
      
      this.lista=data
      
      
      
      
      
    }));

  }

  
  
  
  addProyectos(){

    const {id:id,nombre:nombre,fecha: fecha,descripcion: descripcion,link:link,url:url}=this
    const newProyecto= {
      id:id,
      nombre:nombre,
      fecha:(<HTMLInputElement>document.getElementById("binTipos")).value,
      
      descripcion:(<HTMLInputElement>document.getElementById("binTitulos")).value,
      link:(<HTMLInputElement>document.getElementById("binGrado")).value,
      url:(<HTMLInputElement>document.getElementById("binGrado")).value
      
    }

    

    this,this.loginService.addProyect(newProyecto).subscribe((lista=>
      this.lista.push(newProyecto)
      
       
     ));   
     alert("Exito! Datos cargados correctamente");
     console.log("Este es el modal que agrrega")
    
    this.activeModal.close();
    location.reload();
  }
  

  constructor(public activeModal: NgbActiveModal, private loginService:LoginServiceService) {}
}

@Component({selector: 'ngbd-modal-component-proyect', templateUrl: './proyect-modal.component.html'})
export class NgbdModalComponentProyect {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContentEditProyect);
    
    
    
  }
  openAdd(){
    const modalAddref = this.modalService.open(NgbdModalContentAddProyect);
  }
  openDel(){
    const modalAddref = this.modalService.open(NgbdModalContentDeleteProyect);
  }
  
 
}