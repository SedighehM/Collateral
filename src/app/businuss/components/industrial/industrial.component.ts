import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterPipe } from '../../pipes/filter.pipe';
import { IndustrialsService } from '../../services/industrials.service';

@Component({
  selector: 'app-industrial',
  templateUrl: './industrial.component.html',
  styleUrls: ['./industrial.component.scss'],
})
export class IndustrialComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private industrialsService: IndustrialsService
  ) {}
  industrials: any[] = [];
  static: any[] = [];
  searchForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      name: null,
      entryDate: null,
      owner: null,
      id: null,
    });
    this.industrialsService.getIndustrials().subscribe((response: any[]) => {
      this.industrials = response;
      this.static = response;
    });
  }
  goToAdd() {
    this.router.navigateByUrl('industrial/add');
  }
  goToEdit(event: any, id: number) {
    this.router.navigate(['industrial/edit', id]);
  }
  deleteIndustrial(event: any, id: number) {
    this.industrialsService.deleteIndustrial(id).subscribe((response) => {
      this.industrialsService.getIndustrials().subscribe((response: any[]) => {
        this.industrials = response;
        this.static=response;
      });
    });
  }
  onSearch() {
    var filter = new FilterPipe();
    this.industrials = filter.transform(this.static, this.searchForm.value);
  }
}
