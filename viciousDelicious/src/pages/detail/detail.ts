import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { InstructionPage } from "../instruction/instruction";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  recipeInfo=this.navParams.get("param1");

  GoToInstructions(recipe){
    this.navCtrl.push(InstructionPage,{param1:recipe});

  }


  temporary=[];
  message = "";

  addToCart(){
    let add = this.alertCtrl.create();
    add.setTitle("Adding these ingredients?");
    for (let i of this.temporary){
      this.message += i;
      this.message += "; ";
    };
    add.setMessage(this.message);





    add.addButton("Cancel");

    add.addButton({
      text: "Confirm"
      })

    add.present().then();
  }

  checked(ingredientName){

    this.temporary.push(ingredientName);
    /*if (ingredient.value == false) {
      this.temporary.push(ingredient);
      ingredient.value == true;
    }else{
      this.temporary.splice(this.temporary.indexOf(ingredient),1);
      ingredient.value == false;
    }*/
  }

}
