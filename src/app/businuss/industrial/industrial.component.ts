import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndustrialsService } from '../../industrials.service';

@Component({
  selector: 'app-industrial',
  templateUrl: './industrial.component.html',
  styleUrls: ['./industrial.component.scss'],
})
export class IndustrialComponent implements OnInit {
  constructor(
    private router: Router,
    private industrialsService: IndustrialsService
  ) {}
  industrials: any[] = [];

  ngOnInit(): void {
    this.industrialsService.getIndustrials().subscribe((response: any[]) => {
      this.industrials = response;
    });
  }
  goToAdd() {
    this.router.navigateByUrl('industrial/add');
  }
  goToEdit(event:any,id:number){
    this.router.navigate(['industrial/edit',id]);
  }
  deleteIndustrial(event: any, id: number) {
    this.industrialsService.deleteIndustrial(id).subscribe((response) => {
      this.industrialsService.getIndustrials().subscribe((response: any[]) => {
        this.industrials = response;
      });
    });
  }
}
