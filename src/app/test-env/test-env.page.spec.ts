import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestEnvPage } from './test-env.page';

describe('TestEnvPage', () => {
  let component: TestEnvPage;
  let fixture: ComponentFixture<TestEnvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEnvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestEnvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
