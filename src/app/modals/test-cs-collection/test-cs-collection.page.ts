import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-test-cs-collection',
  templateUrl: './test-cs-collection.page.html',
  styleUrls: ['./test-cs-collection.page.scss'],
})
export class TestCsCollectionPage implements OnInit {

  scannedCode = null;

  constructor(
    private modalCtrl: ModalController,
    private barcodeScn: BarcodeScanner,
  ) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtrl.dismiss()
  }

  scanCode() {
    this.barcodeScn.scan().then (
      barcodeData => {
        this.scannedCode = barcodeData.text;
      }
    )
  }


}
