import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { Country } from './models/country.model';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({
          initialState: {
            app: {
              regions: [
                'Europe',
                'Asia'
            ],
            countries: new Map<string, Array<Country>>(),
            regionSelected: '',
            countrySelected: '',
            loading: false,
            error: undefined
            }
          }
        })
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
