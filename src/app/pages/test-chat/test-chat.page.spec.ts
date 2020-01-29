import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestChatPage } from './test-chat.page';

describe('TestChatPage', () => {
  let component: TestChatPage;
  let fixture: ComponentFixture<TestChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
