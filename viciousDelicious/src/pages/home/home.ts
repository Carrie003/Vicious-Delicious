import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RecipesPage} from "../recipes/recipes";
import {RecipeCollectionPage} from "../recipe-collection/recipe-collection";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  GoToRecipes(){
    this.navCtrl.push(RecipeCollectionPage);
  }
}
