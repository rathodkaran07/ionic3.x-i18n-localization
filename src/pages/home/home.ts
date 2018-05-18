import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private translateService: TranslateService) {
  }

  segmentChanged(event) {
    this.translateService.use(event._value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
