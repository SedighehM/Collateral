import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseServiceService } from 'src/app/base-service.service';

@Injectable({
  providedIn: 'root',
})
export class IndustrialsService {
  constructor(private baseService: BaseServiceService) {}
  getIndustrials(): Observable<any> {
    return this.baseService.get('industrials');
  }
  insertIndustrial(newIndustrial: any): Observable<any> {
    return this.baseService.post('industrials/', newIndustrial);
  }
  deleteIndustrial(id: number): Observable<string> {
    return this.baseService.delete('industrials/', id);
  }
  getIndustrialById(id: number): Observable<any> {
    return this.baseService.get('industrials/' + id);
  }
  getStatuses(): Observable<any[]> {
    return this.baseService.get('statuses');
  }
  getUsages(): Observable<any[]> {
    return this.baseService.get('usages');
  }
  getTypes(): Observable<any[]> {
    return this.baseService.get('types');
  }
  editIndustrial(editedIndustrial: any, id: number): Observable<any> {
    return this.baseService.put('industrials/',id, editedIndustrial);
  }
}
