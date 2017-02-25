import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InstructionPage} from "../instruction/instruction";

/*
  Generated class for the RecipeCollection page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-recipe-collection',
  templateUrl: 'recipe-collection.html'
})


export class RecipeCollectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeCollectionPage');
  }

  collection = RecipeCollection;

  GoToInstruction(recipe){
    this.navCtrl.push(InstructionPage,{param1:recipe});
    //localStorage.setItem("RecipeInfo",recipe);
  }
}



var ingredlist={
  "Tapioca Pearls":{
    amount:0, unit:""
  },
  "Water":{
    amount:0,unit:"g"
  },
  "Sugar":{
    amount:0,unit:"g"
  },
  "Milk Tea":{
    amount:0,unit:"g"
  },
  "Eggs":{
    amount:0,unit:""
  },
  "Spinach":{
    amount:0,unit:""
  },
  "Salt":{
    amount:0,unit:"g"
  },
  "Pepper":{
    amount:0,unit:""
  },
  "Oil":{
    amount:0,unit:"g"
  },
  "Toast":{
    amount:0,unit:""
  }
};

var RecipeCollection=[
  { img:"assets/img/bubbleTeaCover.jpg",
    title:"Milk Tea",
    subtitle1:"This tea-based drink invented in the 1980s. It's normally served with tapioca pearls, milk, and ice.",
    subtitle2:"Quick & Simple Drink",
    ingredients:{"Tapioca Pearls":0,"Water":0,"Sugar":0
    },
    slides:[
      {
        title: "Step 1",
        description: "Boil a pot of water.",
        video : "assets/video/BT1.gif"
      },
      {
        title: "Step 2",
        description: "Add tapioca pearls.",
        video: "assets/video/BT2.gif"
      },
      {
        title: "Step 3",
        description: "Wait till pearls are floating and let them get soft for about 3-4 minutes.",
        video: "assets/video/BT3.gif"
      },
      {
        title: "Step 4",
        description: "Check if pearls have been cooked thoroughly by eating one.",
        video: "assets/video/BT4.gif"
      },
      {
        title: "Step 5",
        description: "If ready, rinse and drain the pearls three times.",
        video: "assets/video/BT5.gif"
      },
      {
        title: "Step 6",
        description: "Move pearls to a bowl and add sugar or honey.",
        video: "assets/video/BT6.gif"
      },
      {
        title: "Step 7",
        description: "Make black or milk tea.",
        video: "assets/video/BT7.gif"
      },
      {
        title: "Step 8",
        description: "Add bubbles and ice to your liking.",
        video: "assets/video/BT8.gif"
      }
    ]
  },
  { img:"assets/img/recipe2Cover.jpg",
    title:"Scrambled Eggs with Spinach",
    subtitle1:"These amazingly flavorful baked eggs with spinach are the easiest way to impress your guests.",
    subtitle2:"Homemade dish",
    ingredients:{"Eggs":0,"Spinach":0,"Salt":0,"Pepper":0,"Oil":0
    },
    slides:[
      {
        title: "Step 1",
        description:"Add oil to the frying pan.",
        video:"assets/img/2-0.mp4"
      },
      {
        title: "Step 2",
        description: "Fry the egg(s).",
        video: "assets/img/2-1.mp4"
      },

      {
        title: "Step 3",
        description: "Chop up the spinach.",
        video: "assets/img/2-2.mp4"
      },
      {
        title: "Step 4",
        description: "Add the spinach into the frying pan.",
        video: "assets/img/2-3.mp4"
      },
      {
        title: "Step 5",
        description: "Keep frying until the spinach is done.",
        video: "assets/img/2-4.mp4"
      },
      {
        title: "Step 6",
        description: "Add salt.",
        video: "assets/img/2-5.mp4"
      },
      {
        title: "Step 7",
        description: "Turn off the heat but keep stir-frying.",
        video: "assets/img/2-6.mp4"
      }
    ]
  },
  { img:"http://68.media.tumblr.com/4a752ae142e375e94552c192500052f9/tumblr_nn2zldxHsL1uq9b1ao3_1280.jpg",
    title:"Fried Egg on Toast",
    subtitle1:"This simple dish is often referred to as Laputa pan (Laputa bread) after its appearance in the Ghibli movie, Laputa: Castle in The Sky.",
    subtitle2:"Homemade dish",
    ingredients:{"Eggs":0,"Toast":0
    },
    slides:[
      {
        title: "Cuisine Information",
        description: "An egg on top of a slice of toast lends towards a delicious breakfast!",
        video : "http://2.bp.blogspot.com/-3lYpn1xoY2I/TyutvQW5C-I/AAAAAAAABtI/G85bp9aVx0I/s1600/DSC03193-1.JPG"
      },
      {
        title: "Step 1",
        description: "EGGS. Note: this gif is not of me (yet)",
        video: "http://cdn.firstwefeast.com/assets/2014/09/1-crack.gif"
      },
      {
        title: "Step 3",
        description: "Place delicately sliced egg on top of warm toast.",
        video: "http://cdn.firstwefeast.com/assets/2014/09/1-crack.gif"
      },
      {
        title: "Step 4",
        description: "This is step 4 and you are making eggs and toast.",
        video: "http://cdn.firstwefeast.com/assets/2014/09/1-crack.gif"
      }
    ]
  }

];






