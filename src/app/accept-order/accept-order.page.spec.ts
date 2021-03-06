import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceptOrderPage } from './accept-order.page';

describe('AcceptOrderPage', () => {
  let component: AcceptOrderPage;
  let fixture: ComponentFixture<AcceptOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
