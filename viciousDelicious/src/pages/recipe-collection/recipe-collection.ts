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
    //this.testcollection=recipeService.shared; // this does not work
    //console.log(JSON.stringify(this.testcollection));
    //console.log(this.testcollection);
    //console.log(recipeService.getSharedlst());

    /*for (let i = 0; i < 3; i++){
      this.collection.push(RecipeCollection[i]);
    }*/});
  }


  /*doInfinite(infiniteScroll){
    setTimeout(()=>{
      for (let i = 0; i < RecipeCollection.length - this.collection.length; i++){
        this.collection.push(RecipeCollection[i+this.collection.length]);
      }
      infiniteScroll.complete();
    }, 500);
  }*/


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

  /*hasMoreRecipes(){
    if (this.collection.length == RecipeCollection.length){
      return false;
    }else{
      return true;
    }
  }*/
}


// var RecipeCollection=[
//   /*Recipe Bubble Tea*/
//   { img:"https://image.ibb.co/g0JebF/bubble_Tea_Cover.jpg",
//     title:"Bubble Milk Tea",
//     subtitle1:"This tea-based drink invented in the 1980s. It's normally served with tapioca pearls, milk, and ice.",
//     subtitle2:"Quick & Simple Drink",
//
//     ingredients:["Tapioca Pearls", "Milk Tea", "Honey or Sugar", "Ice"],
//
//
//     slides:[
//       {
//         title: "Step 1",
//         description: "Boil a pot of water.",
//         video : "http://i.giphy.com/xUPGcBjNqz3Ec9B4v6.gif"
//       },
//       {
//         title: "Step 2",
//         description: "Add tapioca pearls.",
//         video: "http://i.giphy.com/3ohzdVXRZjIZzRaqrK.gif"
//       },
//       {
//         title: "Step 3",
//         description: "Wait till pearls are floating and let them get soft for about 3-4 minutes.",
//         video: "http://i.giphy.com/3ohze0kPJoElPOZ8Iw.gif"
//       },
//       {
//         title: "Step 4",
//         description: "Check if pearls have been cooked thoroughly by eating one.",
//         video: "http://i.giphy.com/3ohzdLxqyLoQ0RHkQw.gif"
//       },
//       {
//         title: "Step 5",
//         description: "If ready, rinse and drain the pearls three times.",
//         video: "http://i.giphy.com/3ohzdPEinyEot6dttK.gif"
//       },
//       {
//         title: "Step 6",
//         description: "Move pearls to a bowl and add sugar or honey.",
//         video: "http://i.giphy.com/xUPGcGnA72vMIz4uPu.gif"
//       },
//       {
//         title: "Step 7",
//         description: "Make black or milk tea.",
//         video: "http://i.giphy.com/3ohzdQfFYoLvihQI7K.gif"
//       },
//       {
//         title: "Step 8",
//         description: "Add bubbles and ice to your liking.",
//         video: "http://i.giphy.com/xUPGcDFp0dtAGHeDwA.gif"
//       }
//     ]
//   },
//   /*Recipe Scrambled Eggs with Spinach*/
//   { img:"https://image.ibb.co/dHiqiv/recipe2_Cover.jpg",
//     title:"Scrambled Eggs with Spinach",
//     subtitle1:"These amazingly flavorful baked eggs with spinach are the easiest way to impress your guests.",
//     subtitle2:"Homemade dish",
//     ingredients:["Eggs","Spinach","Salt","Pepper","Oil"],
//     slides:[
//       {
//         title: "Step 1",
//         description:"Add oil to the frying pan.",
//         video:"http://i.giphy.com/xTiN0M0I2mfRcqhzxu.gif"
//       },
//       {
//         title: "Step 2",
//         description: "Fry the egg(s).",
//         video: "http://i.giphy.com/xTiN0rSZdDVANELiOQ.gif"
//       },
//
//       {
//         title: "Step 3",
//         description: "Chop up the spinach.",
//         video: "http://i.giphy.com/xTiN0j0FIdpkt03mZq.gif"
//       },
//       {
//         title: "Step 4",
//         description: "Add the spinach into the frying pan.",
//         video: "http://i.giphy.com/xTiN0wnSIoWrBNlNUA.gif"
//       },
//       {
//         title: "Step 5",
//         description: "Keep frying until the spinach is done.",
//         video: "http://i.giphy.com/3o84Ueeb0qYGnEl8uA.gif"
//       },
//       {
//         title: "Step 6",
//         description: "Add salt.",
//         video: "http://i.giphy.com/xTiN0FGXnGiSOvmkpy.gif"
//       },
//       {
//         title: "Step 7",
//         description: "Turn off the heat but keep stir-frying.",
//         video: "http://i.giphy.com/3o84U28bwb8PUNX2Jq.gif"
//       }
//     ]
//   },
//   /*Recipe Fried Egg on Toast*/
//   { img:"http://gdurl.com/Vbwo",
//     title:"Fried Egg on Toast",
//     subtitle1:"This simple dish is often referred to as Laputa pan (Laputa bread) after its appearance in the Ghibli movie, Laputa: Castle in The Sky.",
//     subtitle2:"Homemade dish",
//     ingredients:["Eggs","Toast"],
//     slides:[
//       {
//         title: "Step 1",
//         description: "Fry the eggs and flip them; while cooking the eggs, also pop the bread in the toaster.",
//         video: "https://media.giphy.com/media/3ohzdH5EvKIQIMlfNe/giphy.gif"
//       },
//       {
//         title: "Step 2",
//         description: "Cook your eggs to your preference.",
//         video: "https://media.giphy.com/media/3ohzdS9zRaX4AGYfJu/giphy.gif"
//       },
//       {
//         title: "Step 3",
//         description: "Place delicately crafted egg on top of warm toast.",
//         video: "https://media.giphy.com/media/xUPGckQHybNfQOIxZS/giphy.gif"
//       }
//     ]
//   },
//   /*Recipe Ttebokki*/
//   {
//     img:"https://image.ibb.co/ejZ7Va/Tteok_bokki.jpg",
//     title:"Tteok-bokki",
//     subtitle1:"This delicious Korean dish consists of rice and fish cakes with spicy red chili sauce called gochu-jang.",
//     subtitle2:"Spicy stir fried rice cakes",
//     ingredients:["Rice cakes","Gochu-jang","Fish cakes"],
//     slides:[
//       {
//         title: "Step 1",
//         description: "Boil a pot of water",
//         video: "assets/img/BT1.gif"
//       },
//       {
//         title: "Step 2",
//         description: "Add in rice cakes and wait until boiled.",
//         video: "http://i.giphy.com/oP7oYal35XCFy.gif"
//       },
//       {
//         title: "Step 3",
//         description: "Add in fish cakes and cook through.",
//         video: "http://i.giphy.com/xTiN0JEgiZVq5Gf9dK.gif"
//       },
//       {
//         title: "Step 4",
//         description: "Add in gochuchan sauce to your liking. Remember: it's spicy.",
//         video: "http://i.giphy.com/xTiN0hpY8qRFGjLFtu.gif"
//       },
//       {
//         title: "Step 5",
//         description: "Plate and serve while hot!",
//         video: "http://i.giphy.com/3o84U8MxCaI57HXcU8.gif"
//       },
//     ]
//   },
//   /*Recipe Pinol*/
//   { img:"https://image.ibb.co/k9qgqa/Pinol.jpg",
//     title:"Pinol",
//     subtitle1:"A Honduran staple in the mornings, pinol is a warm, thick drink made from finely, roasted, grounded corn mixed with milk and sugar",
//     subtitle2:"Sweet, warm, thick corny drink!",
//     ingredients:["Pinol","Milk","Sugar"],
//     slides:[
//       {
//         title: "Step 1",
//         description: "Add about a cup of dry pinol intol a bowl. ",
//         video : "http://i.giphy.com/tVQvJtDcqmQuY.gif"
//       },
//       {
//         title: "Step 2",
//         description: "Add about a two cups of water for every cup of powder pinol.",
//         video: "http://i.giphy.com/3ohzdPtH5Lsjt1P1mg.gif"
//       },
//
//       {
//         title: "Step 3",
//         description: "Add milk to a pot.",
//         video: "http://i.giphy.com/AJ69kbE15iFy0.gif"
//       },
//       {
//         title: "Step 4",
//         description: "Using a strainer, strain the pinol with water and dissolve the powder all the way through using water as necessarily.",
//         video: "http://i.giphy.com/xUPGcstc8ZpepZOxKU.gif"
//       },
//       {
//         title: "Step 5",
//         description: "Stir in pinol mix to the milk and add 1/3 cup of sugar.",
//         video: "http://i.giphy.com/3ohzdEFIx94nrjZNYc.gif"
//       },
//       {
//         title: "Step 6",
//         description: "Keep mixing until it starts to thicken. Note: do not stop mixing, it can burn very easily if left unattended.",
//         video: "http://i.giphy.com/xUPGcs7VHmYjZSO2t2.gif"
//       },
//       {
//         title: "Step 7",
//         description: "Pour it into a mug, add more sugar to your liking, and enjoy it while it's warm!",
//         video: "http://i.giphy.com/xUPGcCDVlEiJxhNt7O.gif"
//       },
//
//     ]
//   }
//
// ];




//
// RecipeCollection.sort(function(a, b) {
//   var textA = a.title.toUpperCase();
//   var textB = b.title.toUpperCase();
//   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
// });












