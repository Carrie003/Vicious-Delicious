import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import {RecipeCollectionPage} from "../recipe-collection/recipe-collection";
import {ShoppingPage} from '../shopping/shopping';
import { data } from "../data/data";
import {InputPage} from "../input/input"
import { Recipes }from"../../providers/recipes"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  recipes:any;

  constructor(public navCtrl: NavController,public cart:data,public modalCtrl: ModalController,public recipeService:Recipes) {

  }

  GoToRecipes(){
    this.navCtrl.push(RecipeCollectionPage);
  }

  GoToShoppingCart(){
    this.navCtrl.push(ShoppingPage);
    this.cart.setDisplayList();
  }

  GoToInput(){
    let modal = this.modalCtrl.create(InputPage);

    modal.onDidDismiss(recipe => {
      if(recipe){
        //this.recipes.push(recipe);
        this.recipeService.createRecipe(recipe);
      }
    });

    modal.present();

  }

}
