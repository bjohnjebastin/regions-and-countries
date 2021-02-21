import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './models/country.model';
import { Store } from '@ngrx/store';
import { AppState } from './models/appstate.model';
import * as Selectors from '../app/store/selectors/region.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  country$: Observable<Country>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.country$ = this.store.select(Selectors.selectCountry);
  }

}
