import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Recipe2instructionsPage} from '../recipe2instructions/recipe2instructions';

/*
  Generated class for the Recipe2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recipe2',
  templateUrl: 'recipe2.html'
})
export class Recipe2Page {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  GoToRecipe2Instruction(){
    this.navCtrl.push(Recipe2instructionsPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Recipe1Instructions');
  }


}
