import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuildingPage } from '../building/building'
import { ServicesProvider } from '../../providers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  projectList: Array<{}>;
  constructor(public navCtrl: NavController, private services: ServicesProvider) {

    //get ProjectList
    this.getProjectList();

  }

  getProjectList() {
    try {
      this.services.getProjectList().subscribe(result => {
        this.projectList = result.projectName;
        console.log(this.projectList);
      });
    } catch (e) {
      console.log("Profile" + e);
    }
  }

  //getLocation detail

  getLocationDetail(locationId) {
    this.navCtrl.push(BuildingPage, { "locationId": locationId });
    console.log(locationId);
  }

}
