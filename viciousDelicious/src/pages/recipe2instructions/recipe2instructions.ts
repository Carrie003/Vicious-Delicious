import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RecipesPage} from "../recipes/recipes";

/*
  Generated class for the Recipe2instructions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recipe2instructions',
  templateUrl: 'recipe2instructions.html'
})
export class Recipe2instructionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Recipe2instructionsPage');
  }

  slides =[
    {
      title: "Step 1",
      description:"Add oil to the frying pan.",
      video:"assets/img/2-0.mp4"
    },
    {
      title: "Step 2",
      description: "Fry the egg(s).",
      video: "assets/img/2-1.mp4"
    },

    {
      title: "Step 3",
      description: "Chop up the spinach.",
      video: "assets/img/2-2.mp4"
    },
    {
      title: "Step 4",
      description: "",
      video: "assets/img/2-3.mp4"
    },
    {
      title: "Step 5",
      description: "",
      video: "assets/img/2-4.mp4"
    },
    {
      title: "Step 6",
      description: "",
      video: "assets/img/2-5.mp4"
    },
    {
      title: "Step 7",
      description: "",
      video: "assets/img/2-6.mp4"
    }
  ]

  GoToRecipes(){
    this.navCtrl.push(RecipesPage);
  }
}
