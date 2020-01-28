import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-test-sh-progress',
  templateUrl: './test-sh-progress.page.html',
  styleUrls: ['./test-sh-progress.page.scss'],
})
export class TestShProgressPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss()
  }

}
