import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndustrialsService {

  constructor(private httpClient:HttpClient) { }
  getIndustrials():Observable<any[]>{
   return this.httpClient.get<any[]>("http://localhost:3000/industrials")
  }
  insertIndustrial(newIndustrial:any):Observable<any>{
    return this.httpClient.post<any>("http://localhost:3000/industrials",newIndustrial)
  }
  deleteIndustrial(id:number):Observable<string>{
    return this.httpClient.delete<string>("http://localhost:3000/industrials/"+id)
  }
  getIndustrialById(id:number):Observable<any>{
    return this.httpClient.get<any>("http://localhost:3000/industrials/"+id)
  }
  getStatuses():Observable<any[]>{
    return this.httpClient.get<any[]>("http://localhost:3000/statuses")
  }
  getUsages():Observable<any[]>{
    return this.httpClient.get<any[]>("http://localhost:3000/usages")
  }
  getTypes():Observable<any[]>{
    return this.httpClient.get<any[]>("http://localhost:3000/types")
  }
  editIndustrial(editedIndustrial:any,id:number):Observable<any>{
    return this.httpClient.put<any>("http://localhost:3000/industrials/"+id,editedIndustrial)
  }
}
