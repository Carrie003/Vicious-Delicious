import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetailPagePage} from "../recipe1/recipe1";
import {Recipe2Page} from "../recipe2/recipe2";
import {Recipe3Page} from "../recipe3/recipe3";
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

  GoToDetail(){
    this.navCtrl.push(DetailPagePage);
  }

  GoToRecipe2(){
    this.navCtrl.push(Recipe2Page);
  }

  GoToRecipe3(){
    this.navCtrl.push(Recipe3Page);
  }
}
