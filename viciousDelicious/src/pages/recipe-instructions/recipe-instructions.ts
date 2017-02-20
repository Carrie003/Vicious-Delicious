import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
      image: "assets/img/BT1.gif"
    },
    {
      title: "Step 3",
      description: "Wait till pearls are floating and let them get soft for about 3-4 minutes.",
      image: "assets/img/BT1.gif"
    },
    {
      title: "Step 4",
      description: "Check if pearls have been cooked thorugh by eating one.",
      image: "assets/img/BT1.gif"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeInstructionsPage');
  }

}
