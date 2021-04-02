import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressModalComponent } from '../address-modal/address-modal.component';
import { IndustrialsService } from '../../services/industrials.service';
import { Subscription } from 'rxjs';

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
  industrialId: number = 0;
  constructor(
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private IndustrialsService: IndustrialsService
  ) {}
  checkAddress() {
    return (
      this.industrialForm.value.address.registerationNumber ||
      this.industrialForm.value.address.registerationDate ||
      this.industrialForm.value.address.registerationLocation ||
      this.industrialForm.value.address.primaryPelalk ||
      this.industrialForm.value.address.secondaryPelak ||
      this.industrialForm.value.address.details
    );
  }
  addAddress() {
    const modalRef = this.modalService.open(AddressModalComponent);
    if (this.checkAddress()) {
      modalRef.componentInstance.Address = <FormGroup>(
        this.industrialForm.controls['address']
      );
    }
    modalRef.componentInstance.emitService.subscribe((emmitedValue: any) => {
      debugger;
      this.industrialForm.controls['address'].setValue(emmitedValue.value);
      modalRef.close();
    });
    modalRef.componentInstance.closeEmit.subscribe(() => {
      modalRef.close();
    });
  }
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
    console.log(this.industrialForm.value);
    this.submitted = true;
    if (this.industrialForm.valid) {
      if (!this.industrialId) {
        this.IndustrialsService.insertIndustrial(
          this.industrialForm.value
        ).subscribe((response) => {
          this.back();
        });
      } else {
        this.IndustrialsService.editIndustrial(
          this.industrialForm.value,
          this.industrialId
        ).subscribe((response) => {
          this.back();
        });
      }
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
      address: this.formBuilder.group({
        registerationNumber: new FormControl(),
        registerationDate: new FormControl(),
        registerationLocation: new FormControl(),
        primaryPelalk: new FormControl(),
        secondaryPelak: new FormControl(),
        details: new FormControl(),
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
      this.industrialId = params['id'];
      this.IndustrialsService.getIndustrialById(this.industrialId).subscribe(
        (industrial: any) => {
          this.industrialForm.patchValue(industrial);
          industrial.buildings.forEach((building: any) => {
            var formGroup = new FormGroup({
              value: new FormControl(building.value, [Validators.required]),
              completedDate: new FormControl(building.completedDate, [
                Validators.required,
              ]),
              buildingSatus: new FormControl(building.buildingSatus, [
                Validators.required,
              ]),
              buildingArea: new FormControl(building.buildingArea, [
                Validators.required,
              ]),
              floors: new FormControl(building.floors, [Validators.required]),
              buildingUsage: new FormControl(building.buildingUsage, [
                Validators.required,
              ]),
            });

            (<FormArray>this.industrialForm.get('buildings')).push(formGroup);
          });
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