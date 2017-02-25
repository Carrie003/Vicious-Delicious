import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RecipeCollectionPage} from "../pages/recipe-collection/recipe-collection";
import {InstructionPage} from "../pages/instruction/instruction";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipeCollectionPage,
    InstructionPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecipeCollectionPage,
    InstructionPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
