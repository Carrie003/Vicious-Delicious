import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RecipeCollectionPage} from "../recipe-collection/recipe-collection";
import {ShoppingPage} from '../shopping/shopping';
import { data } from "../data/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,public cart:data,) {

  }

  GoToRecipes(){
    this.navCtrl.push(RecipeCollectionPage);
  }

  GoToShoppingCart(){
    this.navCtrl.push(ShoppingPage);
    this.cart.setDisplayList();
  }

}
