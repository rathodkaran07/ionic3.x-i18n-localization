import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Globalization } from "@ionic-native/globalization";
import { Toast } from "@ionic-native/toast";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = 'NewPage';
  rootPage:any = 'HomePage';
  defaultLanguage : string = 'en';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private translateService: TranslateService, private globalization: Globalization, private toast: Toast) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      translateService.addLangs(['en', 'hi', 'hr']);
      translateService.setDefaultLang('en');
      if ((<any>window).cordova) {
        globalization.getPreferredLanguage().then(result => {
          let language = this.getSuitableLanguage(result.value);
          translateService.use(language);
        });
      } else {
        let browserLanguage = translateService.getBrowserLang() || this.defaultLanguage;
        let language = this.getSuitableLanguage(browserLanguage);
        translateService.use(language);
      }
      //translateService.use('en');
    });
  }

  getSuitableLanguage(language) {
    language = language.substring(0, 2).toLowerCase();
    console.log('language => ',language);
    if ((<any>window).cordova) {
      this.toast.show('Language to use is '+language, '5000', 'bottom').subscribe(
        toast => {
          console.log(toast);
        }
      );
    } else {
      alert('Language to use is '+language);
    }

    return language;
    //return availableLanguages.some(x => x.code == language) ? language : this.defaultLanguage;
  }
}

