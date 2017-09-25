import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers';
import { FlatPage } from '../../page';

/**
 * Generated class for the FloorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-floor',
  templateUrl: 'floor.html',
})
export class FloorPage {
  locationId: number;
  floorsList: Array<{}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private services: ServicesProvider) {
    this.getFloorlistList();
  }

  getFloorlistList() {
    try {
      this.services.getFloorList().subscribe(result => {
        this.floorsList = result.floors;
        console.log(this.floorsList);
      });
    } catch (e) {
      console.log("Profile" + e);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FloorPage');
  }
  getFlatDetail(floorId){
    this.navCtrl.push(FlatPage);
  }

}
