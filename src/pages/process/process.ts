import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers';
import { ProcessFormPage } from '../../page';

/**
 * Generated class for the ProcessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-process',
  templateUrl: 'process.html',
})
export class ProcessPage {
  locationId: number;
  processList: Array<{}>;
  shownGroup = null;
  todo = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private services: ServicesProvider) {
    this.getProcessList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcessPage');
  }

  getProcessList() {
    try {
      this.services.getProcessList().subscribe(result => {
        this.processList = result.process;
        console.log(this.processList);
      });
    } catch (e) {
      console.log("Profile" + e);
    }
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };
  logForm() {
    console.log(this.todo)
  }
  showProcessForm(id){
    this.navCtrl.push(ProcessFormPage);
  }

}
