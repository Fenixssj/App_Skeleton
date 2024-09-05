import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username!: string;
  password!: string;
  welcomeMessage: string = 'Bienvenido!';

  constructor(
    private router: Router,
    private toastController: ToastController 
  ) {}
  
  validateLogin() {
    if (this.username === 'admin' && this.password === 'admin') {  // ACA ESTA EL USUARIO CON LA CONTRASEÑA.
      let extras: NavigationExtras = {
        state: {
          user: this.username
        }
      };
      this.toastMessage('Usuario y contraseña válidos', 'success');  // El mensaje de aprovacion al usuario.
      this.router.navigate(['/home'], extras);
    } else {
      this.toastMessage('Usuario o contraseña incorrectos, inténtelo de nuevo.', 'danger');   // El mensaje de incorrecto al usuario.
    }
  }

  async toastMessage(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,    // este es la duracion del mensaje.
      position: 'bottom',
      color: color
    });

    toast.present();
  }
}