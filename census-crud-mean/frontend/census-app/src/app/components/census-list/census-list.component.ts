import { Component, OnInit } from '@angular/core';
import { CensusService, Census } from 'src/app/services/census.service';

@Component({
  selector: 'app-census-list',
  templateUrl: './census-list.component.html',
  styleUrls: ['./census-list.component.css']
})
export class CensusListComponent implements OnInit {
  censusRecords: Census[] = [];

  constructor(private censusService: CensusService) {}

  ngOnInit(): void {
    this.fetchCensusRecords();
  }

  fetchCensusRecords(): void {
    this.censusService.getAll().subscribe((data) => {
      this.censusRecords = data;
    });
  }

  deleteCensus(id: string): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.censusService.delete(id).subscribe(() => {
        this.fetchCensusRecords();
      });
    }
  }
}
