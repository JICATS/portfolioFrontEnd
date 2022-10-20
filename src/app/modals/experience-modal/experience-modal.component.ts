
import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert';
import { Experiencia } from 'src/app/Experiencia';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NgbdModalContentAddExp } from '../add-experience/add-experience.component';
import { NgbdModalContentDelExp } from '../delete-experience/delete-experience.component';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Experiencia</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    
      <form>
        <div class="form-group"  >
          <label>Seleccion el item que desea modificar</label>
            <select  [(ngModel)]="selectedService" name="binTipo" id="binProyectoID" (change)="onChange()">
              <option value="" disabled selected>Seleccione el item a modificar </option>
              <option *ngFor="let item of lista" [ngValue]="item" > {{item.puesto}} </option>
            </select>
            <br>
          <input type="hidden" id="binId" [(ngModel)]="selectedService.id" name="binId">
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
export class NgbdModalContent {
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

  
      
      
      
      

  
  
  addExperience(){

    const {id:id,usuario:usuario,puesto: puesto,descripcion: descripcion,periodo:periodo}=this
    const newExperience= {
      id:(<HTMLInputElement>document.getElementById("binId")).value,
      usuario:usuario,
      puesto:(<HTMLInputElement>document.getElementById("binPuesto")).value,
      descripcion:(<HTMLInputElement>document.getElementById("binDescripcion")).value,
      periodo:(<HTMLInputElement>document.getElementById("binPeriodo")).value
    }

    

    this,this.loginService.addExp(newExperience).subscribe((lista=>
      this.lista.push(newExperience)
      
       
     ));   
     swal("Exito!", "Datos cargados correctamente", "success");
    
    this.activeModal.close();
    location.reload();
    
    
  }
  

  constructor(public activeModal: NgbActiveModal, private loginService:LoginServiceService) {}
}

@Component({selector: 'ngbd-modal-component', templateUrl: './experience-modal.component.html'})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    
    
  }
  openAdd(){

    const modalRef= this.modalService.open(NgbdModalContentAddExp);

  }
  openDel(){
    const modalRef= this.modalService.open(NgbdModalContentDelExp);
  }
 
}