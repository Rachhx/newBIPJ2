import { Component } from '@angular/core';

import { Platform, MenuController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase/app';
import { AuthService } from './shared/services/auth.service';
import 'firebase/auth';
import { LoginPage } from './login/login.page';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }
  ];
  public appPagesAuthenticated = [
    {
      title: 'New orders',
     url: '/show-orders',
      icon: 'Orders'
    },
    {
      title: 'Activity Page',
     url: '/test',
      icon: 'Activity'
    },
    {
     title: 'Order History',
     url: '/order-history',
     icon: 'history'
   },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'profile'
    }
  ];

  // async login() {
  //   const modal = await this.modalController.create({
  //     component: LoginPage
  //   });
  //   return await modal.present();
  // }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalController: ModalController,
    private menuController: MenuController,
    
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      var firebaseConfig = {
        apiKey: "AIzaSyBCmIrqrgt6Pzr9NZ7O3WQjeLt-dQkOq5Q",
        authDomain: "bipjapp.firebaseapp.com",
        databaseURL: "https://bipjapp.firebaseio.com",
        projectId: "bipjapp",
        storageBucket: "bipjapp.appspot.com",
        messagingSenderId: "635184489852",
        appId: "1:635184489852:web:b80e1f4e7a11d49cb130f9",
        measurementId: "G-7QL98X84CJ"
      };
      firebase.initializeApp(firebaseConfig);
      AuthService.intialize();
      
      firebase.auth().onAuthStateChanged((firebaseUser: firebase.User) => {
  if (firebaseUser){
    this.menuController.enable(true, 'authenticated');
  } else {
    this.menuController.enable(true,'unauthenticated');
   }
       });
  });
}
}
