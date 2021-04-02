import { Component, OnInit } from '@angular/core';
import { IndustrialsService } from 'src/app/businuss/services/industrials.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private industrialService:IndustrialsService) { }
  industrialNumber:number=0

  ngOnInit(): void {
    this.industrialService.getIndustrials().subscribe((response)=>{
      this.industrialNumber=response.length;
    })
  }
  }
