import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestShQRPage } from './test-sh-qr.page';

describe('TestShQRPage', () => {
  let component: TestShQRPage;
  let fixture: ComponentFixture<TestShQRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestShQRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestShQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
