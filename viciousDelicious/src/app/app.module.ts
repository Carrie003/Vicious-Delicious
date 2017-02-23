import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecipesPage } from '../pages/recipes/recipes';

import { Recipe1Page } from '../pages/recipe1/recipe1';
import { Recipe1InstructionsPage } from '../pages/recipe1instructions/recipe1instructions';

import { Recipe2Page} from '../pages/recipe2/recipe2';
import { Recipe2instructionsPage} from '../pages/recipe2instructions/recipe2instructions';

import {Recipe3Page} from "../pages/recipe3/recipe3";
import {Recipe3instructionsPage} from "../pages/recipe3instructions/recipe3instructions"

import {RecipeEggtoastPage} from "../pages/recipe-eggtoast/recipe-eggtoast";
import {RecipeEggtoastInstructionsPage} from "../pages/recipe-eggtoast-instructions/recipe-eggtoast-instructions";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipesPage,
    Recipe1Page,
    Recipe1InstructionsPage,
    Recipe2Page,
    Recipe2instructionsPage,
    Recipe3Page,
    Recipe3instructionsPage,
    RecipeEggtoastPage,
    RecipeEggtoastInstructionsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecipesPage,
    Recipe1Page,
    Recipe1InstructionsPage,
    Recipe2Page,
    Recipe2Page,
    Recipe2instructionsPage,
    Recipe3Page,
    Recipe3instructionsPage,
    RecipeEggtoastPage,
    RecipeEggtoastInstructionsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
