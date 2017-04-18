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
  templateUrl: 'recipe-collection.html',
  providers:[Recipes]
})


export class RecipeCollectionPage {

  collection=[];
  //testcollection:any;

  constructor(private platform: Platform, public http: Http, public loading: LoadingController, public navCtrl: NavController, public navParams: NavParams, public cart:data, public recipeService:Recipes) {

    platform.ready().then(() => {
    this.recipeService.loadRecipes();
    });
  }

  sortClicked = false;

  category(cate){
    //this.recipeService.loadCategory(cate);
    //this.recipeService.shared.push("a");
  }

  sort(){
    if (this.sortClicked == false){
      this.sortClicked = true;
    }else{
      this.sortClicked = false;
    }

  }

  GoToDetail(recipe){
    this.navCtrl.push(DetailPage,{param1:recipe});
  }

  GoToShoppingCart(){
    this.navCtrl.push(ShoppingPage);
    this.cart.setDisplayList();
  }


//
// RecipeCollection.sort(function(a, b) {
//   var textA = a.title.toUpperCase();
//   var textB = b.title.toUpperCase();
//   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
// });












