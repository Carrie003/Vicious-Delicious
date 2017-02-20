import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RecipesPage} from "../recipes/recipes";


/*
  Generated class for the RecipeInstructions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recipe-instructions',
  templateUrl: 'recipe-instructions.html'
})
export class RecipeInstructionsPage {
  slides = [
    {
      title: "Step 1",
      description: "Boil a pot of water.",
      image : "assets/img/BT1.gif"
    },
    {
      title: "Step 2",
      description: "Add tapioca pearls.",
      image: "assets/img/BT2.gif"
    },
    {
      title: "Step 3",
      description: "Wait till pearls are floating and let them get soft for about 3-4 minutes.",
      image: "assets/img/BT3.gif"
    },
    {
      title: "Step 4",
      description: "Check if pearls have been cooked thoroughly by eating one.",
      image: "assets/img/BT4.gif"
    },
    {
      title: "Step 5",
      description: "If ready, rinse and drain the pearls three times.",
      image: "assets/img/BT5.gif"
    },
    {
      title: "Step 6",
      description: "Move pearls to a bowl and add sugar or honey.",
      image: "assets/img/BT6.gif"
    },
    {
      title: "Step 7",
      description: "Make black or milk tea.",
      image: "assets/img/BT7.gif"
    },
    {
      title: "Step 8",
      description: "Add bubbles and ice to your liking.",
      image: "assets/img/BT8.gif"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  GoToRecipes(){
    this.navCtrl.push(RecipesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeInstructionsPage');
  }

}
