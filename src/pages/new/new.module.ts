import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NewPage } from './new';
import { HttpLoaderFactory } from "../../app/app.module";
import { HttpClient } from "@angular/common/http";

@NgModule({
  declarations: [
    NewPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPage),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
})
export class NewPageModule {}
