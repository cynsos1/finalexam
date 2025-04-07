import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CensusService, Census } from '../../services/census.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-census-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './census-create.component.html',
  styleUrls: ['./census-create.component.css']
})
export class CensusCreateComponent {
  census: Census = {
    address: '',
    city: '',
    state: '',
    zip: '',
    numberOfPeople: 0,
    year: new Date().getFullYear(),
    censusTaker: ''
  };

  constructor(private censusService: CensusService, private router: Router) {}

  onSubmit(): void {
    this.censusService.create(this.census).subscribe({
      next: () => {
        alert('Census record added!');
        this.router.navigate(['/list']);
      },
      error: (err: any) => {
        console.error('Error creating record:', err);
        alert('Something went wrong. Please try again.');
      }
    });
  }
}
