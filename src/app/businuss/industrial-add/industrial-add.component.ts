import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IndustrialsService } from 'src/app/industrials.service';

@Component({
  selector: 'app-industrial-add',
  templateUrl: './industrial-add.component.html',
  styleUrls: ['./industrial-add.component.scss'],
})
export class IndustrialAddComponent implements OnInit {
  industrialForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  statuses: any[] = [];
  usages: any[] = [];
  types: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private IndustrialsService: IndustrialsService
  ) {}

  onAddBuilding() {
    var formGroup = new FormGroup({
      value: new FormControl('', [Validators.required]),
      completedDate: new FormControl('', [Validators.required]),
      buildingSatus: new FormControl('', [Validators.required]),
      buildingArea: new FormControl('', [Validators.required]),
      floors: new FormControl('', [Validators.required]),
      buildingUsage: new FormControl('', [Validators.required]),
    });

    (<FormArray>this.industrialForm.get('buildings')).push(formGroup);
  }

  getControls() {
    return (this.industrialForm.get('buildings') as FormArray).controls;
  }
  back() {
    this.router.navigateByUrl('/industrial');
  }
  deleteBuilding(index: number) {
    (<FormArray>this.industrialForm.get('buildings')).removeAt(index);
  }
  onSubmit() {
    this.submitted = true;
    if (this.industrialForm.valid) {
      this.IndustrialsService.insertIndustrial(
        this.industrialForm.value
      ).subscribe((response) => {
        this.back();
      });
    }
  }
  ngOnInit(): void {
    this.industrialForm = this.formBuilder.group({
      entryDate: [null, [Validators.required]],
      id: [null, [Validators.required]],
      owner: [null, [Validators.required]],
      name: [null, [Validators.required]],
      type: new FormControl(null),
      landPropertie: this.formBuilder.group({
        area: new FormControl(null),
        cost: new FormControl(null),
        value: new FormControl(null),
        location: new FormControl(null),
      }),
      fence: this.formBuilder.group({
        length: new FormControl(null),
        height: new FormControl(null),
        fenceType: new FormControl(null),
        status: new FormControl(null),
        completedDate: new FormControl(null),
        fenceValue: new FormControl(null),
      }),
      buildings: this.formBuilder.array([]),
    });
    this.activatedRoute.params.subscribe((params) => {
      let industrialId = params['id'];
      this.IndustrialsService.getIndustrialById(industrialId).subscribe(
        (industrial: any) => {
          this.industrialForm.patchValue(industrial);
        }
      );
    });
    this.IndustrialsService.getStatuses().subscribe((response) => {
      this.statuses = response;
    });
    this.IndustrialsService.getUsages().subscribe((response) => {
      this.usages = response;
    });
    this.IndustrialsService.getTypes().subscribe((response) => {
      this.types = response;
    });
  }
}
