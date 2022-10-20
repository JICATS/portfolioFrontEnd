import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { Experiencia } from 'src/app/Experiencia';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NgbdModalContentAddMainDatos } from '../add-datos/add-datos.component';
import { NgbdModalContentEditMainData } from '../edit-datos/edit-datos.component';
import { NgbdModalContentDeleteMainData } from '../delete-datos/delete-datos.component';


@Component({
  selector: 'ngbd-modal-content-datos',
  template: `
    
  `
})
export class NgbdModalContentDatos {
  
  

  

  

  ngOnInit(): void {

   
   
  }

  
      
      
      
      

  
  
  
  

  constructor(public activeModal: NgbActiveModal, private loginService:LoginServiceService) {}
}

@Component({selector: 'ngbd-modal-component-datos', templateUrl: './datos-modal.component.html'})
export class NgbdModalComponentDatos {
  constructor(private modalService: NgbModal) {}

  open() {
    
    const modalAddref=this.modalService.open(NgbdModalContentEditMainData);
    
  }
  openAdd(){

    const modalAddref = this.modalService.open(NgbdModalContentAddMainDatos);

  }
  openDel(){

    const modalAddref=this.modalService.open(NgbdModalContentDeleteMainData);
    
  }
 
}
