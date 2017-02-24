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



var recipes =[
  {
    name: "Bubble Tea",
    subtitle: "Quick & Simple Drink",
    image:"assets/img/bubbleTeaCover.jpg",
    ingredients: {"Milk Tea (cup)": 1, "Tapioca Pearls": "N/A", "Water(cup)": 1, "Honey or Sugar": "N/A"},
    steps: {"Boil a pot of water.":"assets/video/BT1.gif", "Add tapioca pearls.":"assets/video/BT2.gif",
      "Wait till pearls are floating and let them get soft for about 3-4 minutes.":"assets/video/BT3.gif",
      "Check if pearls have been cooked thoroughly by eating one.":"assets/video/BT4.gif",
      "If ready, rinse and drain the pearls three times.": "assets/video/BT5.gif",
      "Move pearls to a bowl and add sugar or honey.":"assets/video/BT6.gif",
      "Make black or milk tea.":"assets/video/BT7.gif","Add bubbles and ice to your liking.":"assets/video/BT8.gif"
    }
  }


];



