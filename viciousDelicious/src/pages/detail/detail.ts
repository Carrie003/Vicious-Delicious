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
    //this.ingredients = <<< make { name: "eggs", selected: false } from recipeInfo >>>
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  recipeInfo=this.navParams.get("param1");

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


  temporary = [];
  message = "";



  addToCart(){
    let add = this.alertCtrl.create();
    add.setTitle("Adding these ingredients?");

    for (let i of this.ingredients){
console.log("---------->", i.selected, i);
      if (i.selected == true){
        this.temporary.push(i);
      }
    }

    if(this.temporary.length==0){
      this.message = "Please select some ingredients;";
    }else{
      for (let i of this.temporary){
        this.message += i.name;
        this.message += "; ";
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
          this.cart.addToList(i);
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


  /*
  checked(ingredientName){
    var find = false;
    for (let item of this.cart.shoppinglist){
      if (item["name"]==ingredientName){
        if (item["clicked"] == false) {
          this.temporary.push(ingredientName);
          item["clicked"] = true;
        } else {
          var temporary1=[];
          for(let str of this.temporary){
            if (str!=ingredientName){
              temporary1.push(str)
            }
          }
          this.temporary=temporary1;
          item["clicked"] = false;
        }
        find = true;
      }
    }
    if(!find){
      this.cart.shoppinglist.push({"name":ingredientName, "amount":0, "clicked":true});
      this.temporary.push(ingredientName);
    }
  };

*/


}
