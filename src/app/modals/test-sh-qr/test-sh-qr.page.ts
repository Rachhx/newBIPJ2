import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-test-sh-qr',
  templateUrl: './test-sh-qr.page.html',
  styleUrls: ['./test-sh-qr.page.scss'],
})
export class TestShQRPage implements OnInit {

  qrData = "Collected";

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtrl.dismiss()
  }

}
