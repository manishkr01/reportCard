import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProcessPage } from '../../page';

/**
 * Generated class for the FlatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-flat',
  templateUrl: 'flat.html',
})
export class FlatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlatPage');
  }
  process() {
    this.navCtrl.push(ProcessPage);
  }
}
