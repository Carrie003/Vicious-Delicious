import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecipeInstructionsPage} from '../pages/recipe-instructions/recipe-instructions';
import { RecipesPage} from '../pages/recipes/recipes';
import { DetailPagePage} from '../pages/detail-page/detail-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipeInstructionsPage,
    RecipesPage,
    DetailPagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecipeInstructionsPage,
    RecipesPage,
    DetailPagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
