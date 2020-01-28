import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 loginForm: FormGroup;
 loginError: string;

  constructor(private authService: AuthService,
    private toastController: ToastController,
    private modalController: ModalController,
    private router: Router) {
      this.loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
      });
     }

  ngOnInit() {
  }
  dismiss(){
    this.modalController.dismiss();
  }

  login(){
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password,).then(
      async () => {
        const toast = await this.toastController.create({
          message: 'Login successful',
          duration: 2000,
          position: 'top',
          color: 'secondary'
        });
        toast.present();
        //this.router.navigate(['/new-orders']);
        this.dismiss();
      }
    )
    .catch(
      error => this.loginError = error.message
    );
  }

}
