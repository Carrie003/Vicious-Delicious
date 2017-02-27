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



  testCheckboxOpen: boolean;

  addToCart(){
    let add = this.alertCtrl.create();
    add.setTitle("Choose the ingredients you want to add?");

    add.addInput({
      type:'checkbox',
      label:"A",
      value:"a"
    });

    add.addInput({
      type:'checkbox',
      label: "B",
      value: "b"
    });

    add.addButton("Cancel");

    add.addButton({
      text: "Confirm",
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
      }
      }
    )

    add.present().then(()=>{
      this.testCheckboxOpen = true;
    });
  }

}
