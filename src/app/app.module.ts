import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { ExperienceComponentComponent } from './components/experience-component/experience-component.component';
import { EducationComponentComponent } from './components/education-component/education-component.component';
import { SkillsComponentComponent } from './components/skills-component/skills-component.component';
import { ProyectsComponentComponent } from './components/proyects-component/proyects-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { CreateUserComponent } from './componets/create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllRoutesComponent } from './all-routes/all-routes.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent, NgbdModalContent } from './modals/experience-modal/experience-modal.component';
import { NgbdModalComponent1, NgbdModalContent1 } from './modals/education-modal/education-modal.component';
import { NgbdModalComponent3, NgbdModalContent3 } from './modals/add-education/add-education.component';

import { NgbdModalComponent4, NgbdModalContent4 } from './modals/delete-education/delete-education.component';

import { NgbdModalContentEdit } from './modals/edit-skill/edit-skill.component';
import { NgbdModalContentDelete } from './modals/delete-skill/delete-skill.component';
import { NgbdModalComponentSkill, NgbdModalContentSkill } from './modals/skills-modal/skills-modal.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProgressSkillsComponent } from './components/progress-skills/progress-skills.component';
import { NgbdModalComponentProyect, NgbdModalContentProyect } from './modals/proyect-modal/proyect-modal.component';

import {NgbdModalContentDeleteProyect } from './modals/delete-proyect/delete-proyect.component';
import { NgbdModalContentEditProyect } from './modals/edit-proyect/edit-proyect.component';
import { NgbdModalContentAddProyect } from './modals/add-proyect/add-proyect.component';
import { DatosBasicComponent } from './components/datos-basic/datos-basic.component';
import { NgbdModalComponentDatos, NgbdModalContentDatos } from './modals/datos-modal/datos-modal.component';
import { NgbdModalContentAddMainDatos } from './modals/add-datos/add-datos.component';
import { NgbdModalContentDeleteMainData } from './modals/delete-datos/delete-datos.component';
import { NgbdModalContentEditMainData } from './modals/edit-datos/edit-datos.component';
import { NgbdModalContentAddExp } from './modals/add-experience/add-experience.component';
import { NgbdModalContentDelExp } from './modals/delete-experience/delete-experience.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    AboutComponentComponent,
    ExperienceComponentComponent,
    EducationComponentComponent,
    SkillsComponentComponent,
    ProyectsComponentComponent,
    LoginComponentComponent,
    CreateUserComponent,
    AllRoutesComponent,
    EditFormComponent,
    NgbdModalComponent,
    NgbdModalComponent1,
    NgbdModalComponent3,
    NgbdModalComponent4,
    NgbdModalComponentSkill,
    NgbdModalComponentProyect,
    NgbdModalComponentDatos,
    NgbdModalContent,
    NgbdModalContent1,
    NgbdModalContent3,
    NgbdModalContent4,
    NgbdModalContentSkill,
    NgbdModalContentProyect,
    NgbdModalContentEdit,
    NgbdModalContentDelete,
    NgbdModalContentDatos,
    ProgressSkillsComponent,
    NgbdModalContentAddProyect,
    NgbdModalContentEditProyect,
    NgbdModalContentDeleteProyect,
    DatosBasicComponent,
    NgbdModalContentAddMainDatos,
    NgbdModalContentDeleteMainData,
    NgbdModalContentEditMainData,
    NgbdModalContentAddExp,
    NgbdModalContentDelExp
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgCircleProgressModule.forRoot({})
    
  ],
  exports: [NgbdModalComponent,NgbdModalComponent1, NgbdModalComponent3,NgbdModalComponent4,NgbdModalComponentSkill,NgbdModalComponentProyect,NgbdModalComponentDatos],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent,NgbdModalComponent]
})
export class AppModule { }
