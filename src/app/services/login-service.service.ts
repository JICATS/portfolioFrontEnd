import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


import { Client } from '../Client';
import { BehaviorSubject, catchError, Observable, throwError,map } from 'rxjs';
import { Router } from '@angular/router';
import { Experiencia } from '../Experiencia';
import { Educacion } from '../Educacion';
import { Habilidad } from '../Habilidad';
import { Proyectos } from '../Proyectos';
import { CookieService } from 'ngx-cookie-service';
import { MainDatos } from '../MainDatos';



const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private getExpUrl = 'http://localhost:8080/api/experience/';
  private getEduUrl = 'http://localhost:8080/api/education/';
  private userUrl = 'http://localhost:8080/log/login';
  
  private loginUrl= 'http://localhost:8080/log/login';
  private getUserUrl='http://localhost:8080/api/login';
  private expUrl='http://localhost:8080/api/experience/1';
  private eduUrl='http://localhost:8080/api/education/'; //aqui saque el 1 de la url para probar si funciona pasar el id
  private habilUrl='http://localhost:8080/api/habilidad/';
  private proyectUrl='http://localhost:8080/api/proyectos/';
  private addEduUrl = 'http://localhost:8080/api/education/';
  private getHabilUrl='http://localhost:8080/api/habilidad/';
  private getProyectUrl='http://localhost:8080/api/proyectos/';
  private getMainDataUrl='http://localhost:8080/api/mainData/';

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookie: CookieService
    
    

  ) { }

  
    
    
  
  addUser(user:Client):Observable<Client>{
    return this.http.post<Client>(this.userUrl,user,httpOptions);
  }
  

  private loggedIn= new BehaviorSubject<boolean>(false);

  loginUser(user1:Client):Observable<Client>{
    console.log(user1);
    return this.http.post<Client>(this.loginUrl,user1,httpOptions).pipe(map((res:any)=>{

      if(this.loggedIn){

        alert("Exito! Datos cargados correctamente");
        this.router.navigate(['/app-all-routes']);
        this.cookie.set("usuario",user1.usuario+'1fdsf12sf')
        
        
        

      }
      
      
      return res;


    }),
      catchError((err)=>{
        alert("Error! Usuario incorrecto o inexistente");
        this.router.navigate(['/app-all-routes']);
        console.log(err);

        return throwError(() => err);

      })
      
      
      
    )
    
    
    

  }
  getUser():Observable<Client[]>{
    
    return this.http.get<Client[]>(this.getUserUrl);

  }

  getExperiencia():Observable<Experiencia[]>{
    
    return this.http.get<Experiencia[]>(this.getExpUrl);

  }
  getMainDatos():Observable<MainDatos[]>{
    
    return this.http.get<MainDatos[]>(this.getMainDataUrl);

  }

  addExp(experience:Experiencia):Observable<Experiencia[]>{
    return this.http.put<Experiencia[]>(this.getExpUrl+experience.id,experience,httpOptions);
  }

  getEducation():Observable<Educacion[]>{
    
    return this.http.get<Educacion[]>(this.getEduUrl);

  }
  getHabilidad():Observable<Habilidad[]>{
    
    return this.http.get<Habilidad[]>(this.getHabilUrl);

  }
  getProyectos():Observable<Proyectos[]>{
    
    return this.http.get<Proyectos[]>(this.getProyectUrl);

  }
  getEducationById(id:string):Observable<Educacion[]>{
    
    return this.http.get<Educacion[]>(this.getEduUrl+id);

  }
  getExperienceById(id:string):Observable<Experiencia[]>{
    
    return this.http.get<Experiencia[]>(this.getExpUrl+id);

  }
  getMainDataById(id:string):Observable<MainDatos[]>{
    
    return this.http.get<MainDatos[]>(this.getMainDataUrl+id);

  }
  getHabilidadByID(id:string):Observable<Habilidad[]>{
    
    return this.http.get<Habilidad[]>(this.getHabilUrl+id);


  }
  getProyectosByID(id:string):Observable<Proyectos[]>{
    
    return this.http.get<Proyectos[]>(this.getProyectUrl+id);


  }

  addEdu(education:Educacion):Observable<Experiencia[]>{
    return this.http.put<Experiencia[]>(this.eduUrl + education.id,education,httpOptions);
    
  }
  addSkill(habilidad:Habilidad):Observable<Habilidad[]>{
    return this.http.put<Habilidad[]>(this.habilUrl + habilidad.id,habilidad,httpOptions);
    
  }
  editProyect(proyecto:Proyectos):Observable<Proyectos[]>{
    return this.http.put<Proyectos[]>(this.proyectUrl + proyecto.id,proyecto,httpOptions);
    
  }
  editMainData(maindata:MainDatos):Observable<MainDatos[]>{
    return this.http.put<MainDatos[]>(this.getMainDataUrl +maindata.id,maindata,httpOptions);
    
  }
  addHabil(habilidad:Habilidad):Observable<Habilidad[]>{
    return this.http.post<Habilidad[]>(this.habilUrl,habilidad,httpOptions);
    
  }
  addProyect(proyecto:Proyectos):Observable<Proyectos[]>{
    return this.http.post<Proyectos[]>(this.proyectUrl,proyecto,httpOptions);
    
  }
  addMainData(Maindata:MainDatos):Observable<MainDatos[]>{
    return this.http.post<MainDatos[]>(this.getMainDataUrl,Maindata,httpOptions);
    
  }

  insertEdu(education:Educacion):Observable<Experiencia[]>{

    return this.http.post<Experiencia[]>(this.addEduUrl,education,httpOptions);

  }
  addExperiencia(experiencia:Experiencia):Observable<Experiencia[]>{

    return this.http.post<Experiencia[]>(this.getExpUrl,experiencia,httpOptions);

  }
  deleteEdu(id:string):Observable<Experiencia[]>{

    return this.http.delete<Experiencia[]>(this.addEduUrl+id,httpOptions);

  }
  deleteSkill(id:string):Observable<Habilidad[]>{

    return this.http.delete<Habilidad[]>(this.habilUrl+id,httpOptions);

  }
  deleteProyect(id:string):Observable<Proyectos[]>{

    return this.http.delete<Proyectos[]>(this.proyectUrl+id,httpOptions);

  }
  deleteMainData(id:string):Observable<MainDatos[]>{

    return this.http.delete<MainDatos[]>(this.getMainDataUrl+id,httpOptions);

  }
  delExp(id:string):Observable<Experiencia[]>{

    return this.http.delete<Experiencia[]>(this.getExpUrl+id,httpOptions);

  }
  

  
  
}
