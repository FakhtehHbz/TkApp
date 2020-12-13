import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapitalPage } from './capital.page';

describe('CapitalPage', () => {
  let component: CapitalPage;
  let fixture: ComponentFixture<CapitalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
