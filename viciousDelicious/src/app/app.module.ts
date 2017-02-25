import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RecipeCollectionPage} from "../pages/recipe-collection/recipe-collection";
import {InstructionPage} from "../pages/instruction/instruction";
import {ShoppingPage} from '../pages/shopping/shopping';
import {data} from '../pages/data/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipeCollectionPage,
    InstructionPage,
    ShoppingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecipeCollectionPage,
    InstructionPage,
    ShoppingPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},data]
})
export class AppModule {}
