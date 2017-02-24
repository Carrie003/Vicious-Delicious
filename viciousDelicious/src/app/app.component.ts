import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { RecipeInstructionsPage } from '../pages/home/recipe1instructions/recipe1instructions';

import { RecipesPage } from '../pages/home/recipes/recipes';

import { Recipe1Page } from '../pages/home/recipe1/recipe1';
import { Recipe2Page } from '../pages/home/recipe2/recipes';
import { Recipe2InstructionsPage} from '../page/home/recipe2instructions/recipe2instructions';

import { RecipeEggtoastPage } from "../pages/recipe-eggtoast/recipe-eggtoast";
import { RecipeEggtoastInstructionsPage } from "../pages/recipe-eggtoast-instructions/recipe-eggtoast-instructions";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();  
      Splashscreen.hide();
    });
  }
}
