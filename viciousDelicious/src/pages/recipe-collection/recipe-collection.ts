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
  titleSearchTerm: string = '';
  ingreSearchTerm: string = '';

  constructor(private platform: Platform, public http: Http, public loading: LoadingController, public navCtrl: NavController, public navParams: NavParams, public cart: data, public recipeService: Recipes) {

    platform.ready().then(() => {
      this.recipeService.loadRecipes();
    }); // load the recipe from the server every time the user opens this page.
  }


  vegetarian() {
    this.recipeService.loadVegetarian();
  }

  nonvegetarian() {
    this.recipeService.loadNonVegetarian();
  }

  food() {
    this.recipeService.loadFoodOnly();
  }

  beverage() {
    this.recipeService.loadBeverageOnly();
  }

  allrecipes(){
    this.recipeService.loadRecipes();
  }


  setFilteredItems() {
    this.recipeService.filterItems(this.titleSearchTerm);
  }

  setFilteredIngre(){
    this.recipeService.filterByIngre(this.ingreSearchTerm);
  }

  sortClicked = false;
  titleSearchClicked = false;
  ingreSearchClicked = false;


  sort() {
    if (this.sortClicked == false) {
      this.sortClicked = true;
      this.titleSearchClicked = false
      this.ingreSearchClicked = false;
    } else {
      this.sortClicked = false;
    }

  }

  searchByTitle() {
    if (this.titleSearchClicked == false) {
      this.titleSearchClicked = true;
      this.sortClicked = false;
      this.ingreSearchClicked = false;
    } else {
      this.titleSearchClicked = false;
    }
  }

  searchByIngredient(){
    if (this.ingreSearchClicked == false){
      this.ingreSearchClicked = true;
      this.titleSearchClicked = false;
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

  changeText() {
    var elem = document.getElementById("endRecipe");
    // show loading
    setTimeout(function() {
      elem.innerHTML = "Test";
    }, 10000);
  }
}











