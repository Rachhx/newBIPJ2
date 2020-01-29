import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestShOrderPage } from './test-sh-order.page';

describe('TestShOrderPage', () => {
  let component: TestShOrderPage;
  let fixture: ComponentFixture<TestShOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestShOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestShOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
