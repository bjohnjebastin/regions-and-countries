import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Country } from 'src/app/models/country.model';
import { SelectComponent } from '../select/select.component';
import { RegionsComponent } from './regions.component';

describe('RegionsComponent', () => {
  let component: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        RegionsComponent,
        SelectComponent
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
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
