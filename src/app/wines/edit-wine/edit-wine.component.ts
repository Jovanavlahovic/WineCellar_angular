import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Wine } from '../model/wine.model';
import { WineService } from '../service/wine.service';

@Component({
  selector: 'app-edit-wine',
  templateUrl: './edit-wine.component.html',
  styleUrls: ['./edit-wine.component.css'],
})
export class EditWineComponent implements OnInit {
  wineId: number;
  formValidator: FormGroup;
  wine: Wine = new Wine();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: WineService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.generateForm();

    this.route.params.subscribe((x) => {
      this.wineId = x['id'] ? x['id'] : '';
      if (this.wineId) {
        this.getWine();
      }
    });
  }

  generateForm(): void {
    this.formValidator = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      year: ['', Validators.required],
      grapes: ['', Validators.required],
      country: ['', Validators.required],
      region: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.wine = this.formValidator.value;
    if (this.wineId) {
      this.wine._id = this.wineId;
      
      this.service.updateWine(this.wine).subscribe( x => {
        this.formValidator.reset();
      });
      
    } else{
      this.service.addWine(this.wine).subscribe();
    }
    this.router.navigate(['wines']);
  }

  getWine(): void {
    this.service.getWine(this.wineId).subscribe((x) => {
      this.formValidator.patchValue(x);
    });
  }
}
