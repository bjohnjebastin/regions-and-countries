import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnChanges {
  @Input() public country: Country;

  constructor() { }

  ngOnChanges(): void {
    console.log(this.country);
  }
}