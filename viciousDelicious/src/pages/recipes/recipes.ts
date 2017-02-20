import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetailPagePage} from "../detail-page/detail-page";
/*
  Generated class for the Recipes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {
  constructor(public navCtrl: NavController) {

  }

  GoToDetail(){
    this.navCtrl.push(DetailPagePage);
  }

}
