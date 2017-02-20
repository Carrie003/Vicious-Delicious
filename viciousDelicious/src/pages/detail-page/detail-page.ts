import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipeInstructionsPage } from '../recipe-instructions/recipe-instructions';


/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-page',
  templateUrl: 'detail-page.html'
})
export class DetailPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPagePage');
  }
  GoToRecipesInstructions(){
    this.navCtrl.push(RecipeInstructionsPage);
  }

}
