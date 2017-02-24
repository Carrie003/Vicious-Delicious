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
    slides : [
      {
        title: "Step 1",
        description: "Boil a pot of water.",
        image : "assets/video/BT1.gif"
      },
      {
        title: "Step 2",
        description: "Add tapioca pearls.",
        image: "assets/video/BT2.gif"
      },
      {
        title: "Step 3",
        description: "Wait till pearls are floating and let them get soft for about 3-4 minutes.",
        image: "assets/video/BT3.gif"
      },
      {
        title: "Step 4",
        description: "Check if pearls have been cooked thoroughly by eating one.",
        image: "assets/video/BT4.gif"
      },
      {
        title: "Step 5",
        description: "If ready, rinse and drain the pearls three times.",
        image: "assets/video/BT5.gif"
      },
      {
        title: "Step 6",
        description: "Move pearls to a bowl and add sugar or honey.",
        image: "assets/video/BT6.gif"
      },
      {
        title: "Step 7",
        description: "Make black or milk tea.",
        image: "assets/video/BT7.gif"
      },
      {
        title: "Step 8",
        description: "Add bubbles and ice to your liking.",
        image: "assets/video/BT8.gif"
      }
  }


];



