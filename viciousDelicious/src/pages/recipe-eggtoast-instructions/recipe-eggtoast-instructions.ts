import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the RecipeEggtoastInstructions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recipe-eggtoast-instructions',
  templateUrl: 'recipe-eggtoast-instructions.html'
})
export class RecipeEggtoastInstructionsPage {
  slides = [
    {
      title: "Cuisine Information",
      description: "An egg on top of a slice of toast lends towards a delicious breakfast!",
      image : "http://cdn.firstwefeast.com/assets/2014/09/1-crack.gif"
    },
    {
      title: "Step 1",
      description: "EGGS.",
      image: "http://cdn.firstwefeast.com/assets/2014/09/1-crack.gif"
    },
    {
      title: "Step 3",
      description: "Place delicately sliced egg on top of warm toast.",
      image: "http://cdn.firstwefeast.com/assets/2014/09/1-crack.gif"
    },
    {
      title: "Step 4",
      description: "This is step 4 and you are making eggs and toast.",
      image: "http://cdn.firstwefeast.com/assets/2014/09/1-crack.gif"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeEggtoastInstructionsPage');
  }

}
