import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert';
import { Habilidad } from 'src/app/Habilidad';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NgbdModalContent3 } from '../add-education/add-education.component';
import { NgbdModalContent4 } from '../delete-education/delete-education.component';



@Component({
  selector: 'ngbd-modal-content-skill-app',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Educación</h4>
      
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
      
      <button type="button" class="btn btn-outline-dark" (click)="addHabilidad()">Save</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      
      
    </div>
  `
})
export class NgbdModalContentSkill {
  @Input() name:string="";

  id:string="";
  usuario:string="";
  tipo:string="";
  habilidad:string="";
  grado:string="";
  
  selectedService2:any;
  

  

  

  lista:Habilidad[]=[];

  ngOnInit(): void {

    this.selectedService2 = new Object();

    this.loginService.getHabilidadByID(this.id).subscribe((data=>{
      
      this.lista=data
      
      
    }));
   
  }
  onChange(){
    const {id:id,usuario:usuario,tipo: tipo,habilidad: habilidad,grado:grado}=this
    
    const newObject={
      id: (<HTMLInputElement>document.getElementById("binTituloID")).value,
      
      usuario:usuario,
      tipo:tipo,
      habilidad:habilidad,
      grado:grado,
      


    }
    
    this.loginService.getHabilidadByID(id).subscribe((data=>{
      
      this.lista=data
      
      
      
      
      
    }));

  }

  
  
  
  addHabilidad(){

    const {id:id,usuario:usuario,tipo: tipo,habilidad: habilidad,grado:grado}=this
    const newHabilidad= {
      id:(<HTMLInputElement>document.getElementById("binId")).value,
      usuario:usuario,
      tipo:(<HTMLInputElement>document.getElementById("binTipos")).value,
      
      habilidad:(<HTMLInputElement>document.getElementById("binTitulos")).value,
      grado:(<HTMLInputElement>document.getElementById("binGrado")).value,
      
    }

    

    this,this.loginService.addHabil(newHabilidad).subscribe((lista=>
      this.lista.push(newHabilidad)
      
       
     ));   
     swal("Exito!", "Datos cargados correctamente", "success");
    
    this.activeModal.close();
    location.reload();
    
    
    
  }
  

  constructor(public activeModal: NgbActiveModal, private loginService:LoginServiceService) {}
}

@Component({selector: 'ngbd-modal-component-skill-app', templateUrl: './add-skill.component.html'})
export class NgbdModalComponentSkill {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContentSkill);
    
    
    
  }
  openAdd(){
    const modalAddref = this.modalService.open(NgbdModalContentSkill);
  }
  openDel(){
    const modalAddref = this.modalService.open(NgbdModalContent4);
  }
  
 
}