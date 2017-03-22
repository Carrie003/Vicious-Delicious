/**
 * Created by XinyuYang on 17/2/25.
 */

export class data{

  shoppinglist: Array<Object>;
  displaylist: Array<Object>;

  constructor(){
    this.shoppinglist=[
      //{"name":"Tapioca Pearls",
      //  "amount":0,
      //  "clicked":false},
      //{"name": "Water",
      //  "amount": 0,
      //  "clicked":false},
      //{"name": "Sugar",
      //  "amount": 0,
      //  "clicked":false},
      //{"name": "Milk Tea",
      //  "amount": 0,
      //  "clicked":false},
      //{"name": "Eggs",
      //  "amount":0,
      // "clicked":false},
      //{"name": "Spinach",
      //  "amount": 0,
      //  "clicked":false},
      //{"name": "Salt",
      //  "amount": 0,
      //  "clicked":false},
      //{"name": "Pepper",
      //  "amount": 0,
      //  "clicked":false},
      //{"name": "Oil",
      // "amount": 0,
      //  "clicked":false},
      //{"name": "Toast",
      //  "amount": 0,
      //  "clicked":false},
      //{"name": "Rice cakes",
      //  "amount": 0,
      //  "clicked":false},
      //{"name": "Gochu-jang",
      //  "amount": 0,
      //  "clicked":false},
      //{"name": "Fish cakes",
      //  "amount": 0,
      //  "clicked":false},
      //{"name": "Pinol",
      //  "amount": 0,
      //  "clicked":false},
      //{"name": "Milk",
      //  "amount": 0,
      //  "clicked":false}
    ];
    this.displaylist=[];
  }


  addToList(ingredientName){
    var found = false;

    for (let ingredientList of this.shoppinglist){
      if (ingredientList["name"] == ingredientName){
        ingredientList["amount"] ++;
        found = true;
      }
    }
    //if (!found){
    //  this.shoppinglist.push({"name":ingredientName, "amount":1, "clicked":true});
    //}
  }

  removeFromList(ingredientDict){
    for (var i=0; i<this.shoppinglist.length; i++){
      if (this.shoppinglist[i]==ingredientDict){
        if(this.shoppinglist[i]["amount"]>0){
          this.shoppinglist[i]["amount"]--;
          this.setDisplayList();
        }
        break;
      }

    }
  }


  //getList(){
  //  return this.shoppinglist;
  //}

  setDisplayList(){
    this.displaylist=[];
    for(var i=0; i<this.shoppinglist.length; i++){
      if(this.shoppinglist[i]["amount"]>0){
        this.displaylist.push(this.shoppinglist[i]);
      }
    }
  }

  //getDisplayList(){
  //  return this.displaylist;
  //}



}
