import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewinfoPage } from '../viewinfo/viewinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  clickTour(aw){
    this.navCtrl.push(ViewinfoPage, aw);
  }

}
