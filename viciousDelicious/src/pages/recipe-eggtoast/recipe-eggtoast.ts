import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RecipeEggtoastInstructionsPage} from "../recipe-eggtoast-instructions/recipe-eggtoast-instructions";

/*
  Generated class for the RecipeEggtoast page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recipe-eggtoast',
  templateUrl: 'recipe-eggtoast.html'
})
export class RecipeEggtoastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPagePage');
  }
  GoToRecipesEggToastInstructions(){
    this.navCtrl.push(RecipeEggtoastInstructionsPage);
  }

}
