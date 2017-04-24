import { Component } from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {DetailPage} from "../detail/detail";
import {ShoppingPage} from '../shopping/shopping';
import { data } from "../data/data";
import { LoadingController } from 'ionic-angular';
import "rxjs/Rx";
import { Http } from '@angular/http';
import { Recipes }from"../../providers/recipes"



/*
  Generated class for the RecipeCollection page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-recipe-collection',
  templateUrl: 'recipe-collection.html'
  //providers:[Recipes]

})


export class RecipeCollectionPage {

  collection = [];
  searchTerm: string = '';
  ingreSearchTerm: string = '';


  constructor(private platform: Platform, public http: Http, public loading: LoadingController, public navCtrl: NavController, public navParams: NavParams, public cart: data, public recipeService: Recipes) {

    platform.ready().then(() => {
      this.recipeService.loadRecipes();
    });
  }


  beverageSelected() {
    this.recipeService.loadBeverage()
  }

  foodSelected() {
    this.recipeService.loadFood()
  }

  allSelected() {
    this.recipeService.loadRecipes()
  }

  setFilteredItems() {
    this.recipeService.filterItems(this.searchTerm);
  }

  setFilteredIngre(){
    this.recipeService.filterByIngre(this.ingreSearchTerm);
  }

  sortClicked = false;
  searchClicked = false;
  ingreSearchClicked = false;


  sort() {
    if (this.sortClicked == false) {
      this.sortClicked = true;
      this.searchClicked = false
      this.ingreSearchClicked = false;
    } else {
      this.sortClicked = false;
    }

  }

  search() {
    if (this.searchClicked == false) {
      this.searchClicked = true;
      this.sortClicked = false;
      this.ingreSearchClicked = false;
    } else {
      this.searchClicked = false;
    }
  }

  searchByIngredient(){
    if (this.ingreSearchClicked == false){
      this.ingreSearchClicked = true;
      this.searchClicked = false;
      this.sortClicked = false;
    }else{
      this.ingreSearchClicked = false;
    }

  }


  GoToDetail(recipe) {
    this.navCtrl.push(DetailPage, {param1: recipe});
  }

  GoToShoppingCart() {
    this.navCtrl.push(ShoppingPage);
    this.cart.setDisplayList();
  }

}











