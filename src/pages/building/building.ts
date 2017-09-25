import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers';
import { FloorPage } from '../../page';
/**
 * Generated class for the BuildingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-building',
  templateUrl: 'building.html',
})
export class BuildingPage {
  locationId: number;
  buildingList: Array<{}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private services: ServicesProvider) {
    this.locationId = this.navParams.get("locationId");
    this.getProjectList();
  }


  getProjectList() {
    try {
      this.services.getBuildingList().subscribe(result => {
        this.buildingList = result.buildings;
        console.log(this.buildingList);
      });
    } catch (e) {
      console.log("Profile" + e);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BuildingPage');
  }
  getFloorDetail(buildingId) {
    this.navCtrl.push(FloorPage,{"buildingId": buildingId});
  }

}
