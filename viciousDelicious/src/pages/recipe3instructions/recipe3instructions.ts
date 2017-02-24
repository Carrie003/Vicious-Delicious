import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RecipesPage} from "../recipes/recipes";
/*
  Generated class for the Recipe3instructions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recipe3instructions',
  templateUrl: 'recipe3instructions.html'
})
export class Recipe3instructionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Recipe3instructionsPage');
  }

  slides =[
    {
      title: "Step 1",
      description:"a",
      video:"assets/video/big-buck-bunny_trailer.webm"
    },
    {
      title: "Step 2",
      description: "b",
      video: "assets/video/big-buck-bunny_trailer.webm"
    },

    {
      title: "Step 3",
      description: "b",
      video: "assets/video/big-buck-bunny_trailer.webm"
    }
  ];

  GoToRecipes(){
    this.navCtrl.push(RecipesPage);
  }
}
