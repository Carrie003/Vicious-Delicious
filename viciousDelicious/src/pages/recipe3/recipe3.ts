import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Recipe3instructionsPage} from '../recipe3instructions/recipe3instructions'
/*
  Generated class for the Recipe3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recipe3',
  templateUrl: 'recipe3.html'
})
export class Recipe3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  GoToRecipe3Instruction(){
    this.navCtrl.push(Recipe3instructionsPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Recipe1InstructionsPage');
  }


}



