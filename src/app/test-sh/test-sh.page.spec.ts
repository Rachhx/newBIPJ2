import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestShPage } from './test-sh.page';

describe('TestShPage', () => {
  let component: TestShPage;
  let fixture: ComponentFixture<TestShPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestShPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestShPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
