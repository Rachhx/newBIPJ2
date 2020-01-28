import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestShProgressPage } from './test-sh-progress.page';

describe('TestShProgressPage', () => {
  let component: TestShProgressPage;
  let fixture: ComponentFixture<TestShProgressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestShProgressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestShProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
