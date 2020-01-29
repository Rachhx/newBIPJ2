import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestCsPage } from './test-cs.page';

describe('TestCsPage', () => {
  let component: TestCsPage;
  let fixture: ComponentFixture<TestCsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestCsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
