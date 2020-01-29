import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestCsCollectionPage } from './test-cs-collection.page';

describe('TestCsCollectionPage', () => {
  let component: TestCsCollectionPage;
  let fixture: ComponentFixture<TestCsCollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCsCollectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestCsCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
