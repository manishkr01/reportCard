import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { HomePage, BuildingPage, FlatPage, FloorPage, ProcessPage, ProcessFormPage } from '../page';
import { ServicesProvider } from '../providers';


@NgModule({
  declarations: [
    MyApp,
    HomePage, BuildingPage, FlatPage, FloorPage, ProcessPage, ProcessFormPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, BuildingPage, FlatPage, FloorPage, ProcessPage, ProcessFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServicesProvider
  ]
})
export class AppModule { }
