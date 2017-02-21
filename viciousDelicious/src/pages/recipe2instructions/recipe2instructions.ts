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
      description: ""
    },
    {
      title: "Step 2",
      description: ""
    }
  ]

  GoToRecipes(){
    this.navCtrl.push(RecipesPage);
  }
}
