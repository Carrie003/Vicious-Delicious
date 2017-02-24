import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Recipe1Page} from "../recipe1/recipe1";
import {Recipe2Page} from "../recipe2/recipe2";
import {Recipe3Page} from "../recipe3/recipe3";
import {RecipeEggtoastPage} from "../recipe-eggtoast/recipe-eggtoast";
/*
  Generated class for the Recipes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {
  constructor(public navCtrl: NavController) {

  }

  /* TODO:
  Create a function for going to page to reduce page-specific methods (if we will have a lot of recipes, and that this recipes.html will list all of the recipes).
   */

  GoToDetail(){
    this.navCtrl.push(Recipe1Page);
  }

  GoToRecipe2(){
    this.navCtrl.push(Recipe2Page);
  }

  GoToRecipe3(){
    this.navCtrl.push(Recipe3Page);
  }

  GoToRecipeEggToast() {
    this.navCtrl.push(RecipeEggtoastPage);
  }
}
