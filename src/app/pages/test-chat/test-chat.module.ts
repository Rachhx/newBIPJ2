import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestChatPageRoutingModule } from './test-chat-routing.module';

import { TestChatPage } from './test-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestChatPageRoutingModule
  ],
  declarations: [TestChatPage]
})
export class TestChatPageModule {}
