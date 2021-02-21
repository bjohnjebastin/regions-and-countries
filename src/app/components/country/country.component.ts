import { Component, Input } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  @Input() public country: Country = null;
}
