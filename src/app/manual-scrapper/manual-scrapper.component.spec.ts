import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualScrapperComponent } from './manual-scrapper.component';
import { FormsModule } from '@angular/forms';

describe('ManualScrapperComponent', () => {
  let component: ManualScrapperComponent;
  let fixture: ComponentFixture<ManualScrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualScrapperComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualScrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
