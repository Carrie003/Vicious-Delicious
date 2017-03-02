import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetailPage} from "../detail/detail";

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

  GoToDetail(recipe){
    this.navCtrl.push(DetailPage,{param1:recipe});
  }
}


var RecipeCollection=[
  /*Recipe Bubble Tea*/
  { img:"assets/img/bubbleTeaCover.jpg",
    title:"Milk Tea",
    subtitle1:"This tea-based drink invented in the 1980s. It's normally served with tapioca pearls, milk, and ice.",
    subtitle2:"Quick & Simple Drink",
    ingredients:[{name:"Tapioca Pearls",amount:0},{name:"Water",amount:0},{name:"Sugar",amount:0}
    ],
    slides:[
      {
        title: "Step 1",
        description: "Boil a pot of water.",
        video : "assets/img/BT1.gif"
      },
      {
        title: "Step 2",
        description: "Add tapioca pearls.",
        video: "assets/img/BT2.gif"
      },
      {
        title: "Step 3",
        description: "Wait till pearls are floating and let them get soft for about 3-4 minutes.",
        video: "assets/img/BT3.gif"
      },
      {
        title: "Step 4",
        description: "Check if pearls have been cooked thoroughly by eating one.",
        video: "assets/img/BT4.gif"
      },
      {
        title: "Step 5",
        description: "If ready, rinse and drain the pearls three times.",
        video: "assets/img/BT5.gif"
      },
      {
        title: "Step 6",
        description: "Move pearls to a bowl and add sugar or honey.",
        video: "assets/img/BT6.gif"
      },
      {
        title: "Step 7",
        description: "Make black or milk tea.",
        video: "assets/img/BT7.gif"
      },
      {
        title: "Step 8",
        description: "Add bubbles and ice to your liking.",
        video: "assets/img/BT8.gif"
      }
    ]
  },
  /*Recipe Scrambled Eggs with Spinach*/
  { img:"assets/img/recipe2Cover.jpg",
    title:"Scrambled Eggs with Spinach",
    subtitle1:"These amazingly flavorful baked eggs with spinach are the easiest way to impress your guests.",
    subtitle2:"Homemade dish",
    ingredients:[{name:"Eggs",amount:0},{name:"Spinach",amount:0},{name:"Salt",amount:0},{name:"Pepper",amount:0},{name:"Oil",amount:0}
    ],
    slides:[
      {
        title: "Step 1",
        description:"Add oil to the frying pan.",
        video:"http://i.giphy.com/xTiN0M0I2mfRcqhzxu.gif"
      },
      {
        title: "Step 2",
        description: "Fry the egg(s).",
        video: "http://i.giphy.com/xTiN0rSZdDVANELiOQ.gif"
      },

      {
        title: "Step 3",
        description: "Chop up the spinach.",
        video: "http://i.giphy.com/xTiN0j0FIdpkt03mZq.gif"
      },
      {
        title: "Step 4",
        description: "Add the spinach into the frying pan.",
        video: "http://i.giphy.com/xTiN0wnSIoWrBNlNUA.gif"
      },
      {
        title: "Step 5",
        description: "Keep frying until the spinach is done.",
        video: "http://i.giphy.com/3o84Ueeb0qYGnEl8uA.gif"
      },
      {
        title: "Step 6",
        description: "Add salt.",
        video: "http://i.giphy.com/xTiN0FGXnGiSOvmkpy.gif"
      },
      {
        title: "Step 7",
        description: "Turn off the heat but keep stir-frying.",
        video: "http://i.giphy.com/3o84U28bwb8PUNX2Jq.gif"
      }
    ]
  },
  /*Recipe Fried Egg on Toast*/
  { img:"http://gdurl.com/Vbwo",
    title:"Fried Egg on Toast",
    subtitle1:"This simple dish is often referred to as Laputa pan (Laputa bread) after its appearance in the Ghibli movie, Laputa: Castle in The Sky.",
    subtitle2:"Homemade dish",
    ingredients:[{name:"Eggs",amount:0},{name:"Toast",amount:0}
    ],
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
  },
  /*Recipe Ttebokki*/
  {
    img:"assets/img/Tteok-bokki.jpg",
    title:"Tteok-bokki",
    subtitle1:"This delicious Korean dish consists of rice and fish cakes with spicy red chili sauce called gochu-jang.",
    subtitle2:"Spicy stir fried rice cakes",
    ingredients:[{name:"Rice cakes",amount:0},{name:"Gochu-jang",amount:0}, {name:"Fish cakes",amount:0},],
    slides:[
      {
        title: "Step 1",
        description: "Boil a pot of water",
        video: "assets/img/BT1.gif"
      },
      {
        title: "Step 2",
        description: "Add in rice cakes and wait until boiled.",
        video: "http://i.giphy.com/oP7oYal35XCFy.gif"
      },
      {
        title: "Step 3",
        description: "Add in fish cakes and cook through.",
        video: "http://i.giphy.com/xTiN0JEgiZVq5Gf9dK.gif"
      },
      {
        title: "Step 4",
        description: "Add in gochuchan sauce to your liking. Remember: it's spicy.",
        video: "http://i.giphy.com/xTiN0hpY8qRFGjLFtu.gif"
      },
      {
        title: "Step 5",
        description: "Plate and serve while hot!",
        video: "http://i.giphy.com/3o84U8MxCaI57HXcU8.gif"
      },
    ]
  },
  /*Recipe Pinol*/
  { img:"assets/img/Pinol.jpg",
    title:"Pinol",
    subtitle1:"A Honduran staple in the mornings, pinol is a warm, thick drink made from finely, roasted, grounded corn mixed with milk and sugar",
    subtitle2:"Sweet, warm, thick corny drink!",
    ingredients:[{name:"Pinol",amount:0},{name:"Milk",amount:0},{name:"Sugar",amount:0},
    ],
    slides:[
      {
        title: "Step 1",
        description: "Add about a cup of dry pinol intol a bowl. ",
        video : "http://i.giphy.com/tVQvJtDcqmQuY.gif"
      },
      {
        title: "Step 2",
        description: "Add about a two cups of water for every cup of powder pinol.",
        video: "http://i.giphy.com/3ohzdPtH5Lsjt1P1mg.gif"
      },

      {
        title: "Step 3",
        description: "Add mill to a pot.",
        video: "http://i.giphy.com/AJ69kbE15iFy0.gif"
      },
      {
        title: "Step 4",
        description: "Using a strainer, strain the pinol with water and dissolve the powder all the way through using water as necessarly.",
        video: "http://i.giphy.com/xUPGcstc8ZpepZOxKU.gif"
      },
      {
        title: "Step 5",
        description: "Stir in pinol mix to the milk and add 1/3 cup of sugar.",
        video: "http://i.giphy.com/3ohzdEFIx94nrjZNYc.gif"
      },
      {
        title: "Step 6",
        description: "Keep mixing until it starts to thicken. Note: do not stop mixing, it can burn very easily if left unattended.",
        video: "http://i.giphy.com/xUPGcs7VHmYjZSO2t2.gif"
      },
      {
        title: "Step 7",
        description: "Pour it into a mug, add more sugar to your liking, and enjoy it while its warm!",
        video: "http://i.giphy.com/xUPGcCDVlEiJxhNt7O.gif"
      },

    ]
  },


];

RecipeCollection.sort(function(a, b) {
  var textA = a.title.toUpperCase();
  var textB = b.title.toUpperCase();
  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});










