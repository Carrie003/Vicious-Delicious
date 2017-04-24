import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { InstructionPage } from "../instruction/instruction";
import { data } from "../data/data";
import {ShoppingPage} from '../shopping/shopping';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public cart:data, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  recipeInfo=this.navParams.get("param1");

  /**
   * Creating a middle point between model and view, so certain information doesn't need to go to the server.
   * Having a dictionary that has values that can indicate if certain ingredient(checkbox) is selected.
   **/
  ingredients = this.recipeInfo.ingredients.map(ingredientName => {
    return {name: ingredientName, selected: false};
  })


  GoToInstructions(recipe){
    this.navCtrl.push(InstructionPage,{param1:recipe});

  }

  GoToShoppingCart(){
    this.navCtrl.push(ShoppingPage);
    this.cart.setDisplayList();
  }


  temporary = []; //A temporary list to hold the ingredients that are currently selected.
  message = "";
  buttonName = "Select All";
  selectedAll = false;

  allChosen = true;
  allUnchosen = true;

  clicked(){
    this.allChosen = true;
    this.allUnchosen = true;
    for (let i of this.ingredients){
      if (i.selected == false){
        this.allChosen = false;
      }
      if (i.selected){
        this.allUnchosen = false;
      }
    }

    if (this.allChosen){
      this.selectedAll = true;
      this.buttonName = "Unselect All";
    }

    if (this.allUnchosen){
      this. selectedAll = false;
      this.buttonName = "Select All";
    }

  }

  selectAll(){
    if (this.selectedAll == false){
      for (let i of this.ingredients) {
        i.selected = true;
        this.buttonName = "Unselect All";
      }
      this.selectedAll = true;
    }else{
      for (let i of this.ingredients){
        i.selected = false;
        this.buttonName = "Select All";
      }
      this.selectedAll = false;
    }
  }

  addToCart(){
  /**
   * Adding the checked ingredients into the shopping list
   **/
    let add = this.alertCtrl.create();
    //The alarm popup to notify the user of the ingredients that are selected.
    add.setTitle("Adding these ingredients?");

    for (let i of this.ingredients){
      if (i.selected == true){
        this.temporary.push(i);
      }
    }

    /**
     * TODO: Refactor
     */
    if(this.temporary.length==0){
      add.setTitle("No ingredients added!");
      this.message = "Please select some ingredients.";
    }else{
      for (let i of this.temporary){
        if (i.length == this.temporary.length) {
          this.message += i.name;
        }
        else {
          this.message += i.name;
          this.message += ", ";
        }
      }
    }
    add.setMessage(this.message);

    add.addButton({
      text: "Cancel",
      handler: () =>{
        for (let i of this.ingredients) {
          i.selected = false;
        }
        this.temporary=[];
        this.message="";
      }
    });


    add.addButton({
      text: "Confirm",
      handler: () =>{
        for (let i of this.temporary) {
          this.cart.addToList(i.name);
        }

        for (let i of this.ingredients) {
          i.selected = false;
        }

        this.temporary=[];
        this.message="";
      }
    });

    add.present().then();
  }


}
