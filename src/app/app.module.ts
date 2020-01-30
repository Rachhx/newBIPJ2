import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { TestCsCollectionPage } from './modals/test-cs-collection/test-cs-collection.page';
import { TestShProgressPage } from './modals/test-sh-progress/test-sh-progress.page';
import { TestShQRPage } from './modals/test-sh-qr/test-sh-qr.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CartModalPage } from './modals/cart-modal/cart-modal.page';

@NgModule({
  declarations: [
    AppComponent,
    TestCsCollectionPage,
    TestShProgressPage,
    TestShQRPage,
    CartModalPage,

  ],
  entryComponents: [
    TestCsCollectionPage,
    TestShProgressPage,
    TestShQRPage,
    CartModalPage
  ],
  imports: [
     BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxQRCodeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Firebase,
    { provide: FirestoreSettingsToken, useValue: {} },
    FirebaseX,
    BarcodeScanner,
    Base64ToGallery,
    Camera,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
