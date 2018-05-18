import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  bar = { "test": 'bar' };
  constructor(public navCtrl: NavController, public navParams: NavParams, private translateService: TranslateService) {
    /*translateService.setTranslation('en', {
      IN_APP : 'Internal app translation'
    });

    translateService.setTranslation('hr', {
      IN_APP : 'Prijevod unutar aplikacije'
    });*/
  }

  segmentChanged(event) {
    this.translateService.use(event._value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

}
