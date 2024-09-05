import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = 'guest';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state && state['user']) {
      console.log(`User: ${state['user']}`);
      this.username = state['user'];
    }
  }
}
