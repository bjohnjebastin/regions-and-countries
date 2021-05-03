import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { RegionReducer } from './store/reducers/region.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { RegionEffects } from './store/effects/region.effects';
import { SelectComponent } from './components/select/select.component';
import { CountryComponent } from './components/country/country.component';
import { RegionsComponent } from './components/regions/regions.component';
import { LargeDatasetComponent } from './components/large-dataset/large-dataset.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    SelectComponent,
    CountryComponent,
    RegionsComponent,
    LargeDatasetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ region: RegionReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([RegionEffects]),
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
