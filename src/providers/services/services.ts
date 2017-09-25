import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  constructor(public http: Http) {
    console.log('Hello ServicesProvider Provider');
  }

  getProjectList(){
    return this.http.get('assets/data/site.json').map(res => res.json());
  }
  getBuildingList(){
    return this.http.get('assets/data/building.json').map(res => res.json());
  }
  getFloorList(){
    return this.http.get('assets/data/floors.json').map(res => res.json());
  }
  getFlatList(){
    return this.http.get('assets/data/floors.json').map(res => res.json());
  }
  getProcessList(){
    return this.http.get('assets/data/process.json').map(res => res.json());
  }
}
