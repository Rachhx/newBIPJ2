import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private auth: AuthService, 
    private alertCtrl: AlertController, 
    private toastCtrl: ToastController, 
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', Validators.required]
    });
  }

  registerUser() {
    this.auth.isUsernameAvailable(this.registerForm.value.username).subscribe(res => {
      if (res.length > 0) {
        let alert = this.alertCtrl.create({
          header: 'Error',
          message: 'username already taken',
          buttons: ['OK']
        });
        alert.then(alert => alert.present());
      } else {
        this.auth.signUp(this.registerForm.value).then(async (res) => {
          let toast = await this.toastCtrl.create({
            duration: 3000,
            message: 'Successfully created new Account!'
          });
          toast.present();
          this.router.navigateByUrl('/dashboard');
        }, async (err) => {
          let alert = await this.alertCtrl.create({
            header: 'Error',
            message: err.message,
            buttons: ['OK']
          });
          alert.present();
        })
      }
    })
  }

}
