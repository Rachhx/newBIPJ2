import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestCsOrderPage } from './test-cs-order.page';

describe('TestCsOrderPage', () => {
  let component: TestCsOrderPage;
  let fixture: ComponentFixture<TestCsOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCsOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestCsOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
