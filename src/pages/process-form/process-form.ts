import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ProcessFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-process-form',
  templateUrl: 'process-form.html',
})
export class ProcessFormPage {
  todo = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcessFormPage');
  }
  takePicture() {
    var options = {
      quality: 80,
      allowEdit: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      //encodingType: this.camera.EncodingType.PNG,
    };

    // Get the data of an image
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

  }

  logForm() {
    console.log(this.todo)
  }
}
