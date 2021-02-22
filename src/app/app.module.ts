import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { RegionReducer } from './store/reducers/region.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { RegionEffects } from './store/effects/region.effects';
import { SelectComponent } from './components/select/select.component';
import { CountryComponent } from './components/country/country.component';
import { RegionsComponent } from './components/regions/regions.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    SelectComponent,
    CountryComponent,
    RegionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ region: RegionReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([RegionEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
