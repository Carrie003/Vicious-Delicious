import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RecipeCollectionPage}from "../recipe-collection/recipe-collection"

/*
  Generated class for the Instruction page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-instruction',
  templateUrl: 'instruction.html'
})
export class InstructionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstructionPage');
  }

  //recipeInfo=localStorage.getItem("RecipeInfo");
  recipeInfo=this.navParams.get("param1"); // This is the collection dictionary in RecipeCollectionPage
  message = "Congratulations! You just made "+this.recipeInfo.title+"!";
  slides=this.recipeInfo.slides;

  GoToRecipes(){
    this.navCtrl.push(RecipeCollectionPage);
  }

}

