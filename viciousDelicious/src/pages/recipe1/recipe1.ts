import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Recipe1Instructions } from '../recipe1instructions/recipe1instructions';

/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-page',
  templateUrl: 'recipe1.html'
})
export class Recipe1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPagePage');
  }
  GoToRecipesInstructions(){
    this.navCtrl.push(Recipe1Instructions);
  }

}
