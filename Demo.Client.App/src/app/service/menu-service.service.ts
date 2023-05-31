import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs'; 
import { catchError, map } from 'rxjs/operators';  
import { MenuItem, TreeData } from '../models/node-data.model';
import { environment } from 'src/config/environment';
@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  private Url = environment.baseUrl + 'api/menu';  
  constructor(private http: HttpClient) { }

  getMenu(): Observable<TreeData[]> {  
    const url = `${this.Url}/GetMenu`;  
    return this.http.get<[]>(url)  ;
      
  }

  createMenuItem(menu: MenuItem): Observable<MenuItem> { 
    const url  = `${this.Url}/Add`;
    return this.http.post<MenuItem>(url, menu)  ;
  }  
  
  deleteMenuItem(item: MenuItem):Observable<MenuItem>{  
    const url = `${this.Url}/Delete`;  
   
    return this.http.post<MenuItem>(url, item);
  
  }  
  
  updateMenuItem(menu: MenuItem): Observable<MenuItem> {  

    const url = `${this.Url}/Updated`;  
    return this.http.post<MenuItem>(url, menu)  ;
  }  
  


}
