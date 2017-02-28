/**
 * Created by XinyuYang on 17/2/25.
 */

export class data{

  shoppinglist: Array<Object>;


  constructor(){
    this.shoppinglist=[
    {"name":"Tapioca Pearls",
    "amount":0},
      {"name": "Water",
      "amount": 0},
      {"name": "Sugar",
      "amount": 0},
      {"name": "Milk Tea",
      "amount": 0},
      {"name": "Eggs",
      "amount":0},
      {"name": "Spinach",
      "amount": 0},
      {"name": "Salt",
      "amount": 0},
      {"name": "Pepper",
      "amount": 0},
      {"name": "Oil",
      "amount": 0}
    ]
  }


  addToList(ingredientName){
    var found = false;

    for (let ingredientList of this.shoppinglist){
      if (ingredientList["name"] == ingredientName){
        ingredientList["amount"] ++;
        found = true;
      }
    }
    if (found == false){
      this.shoppinglist.push({"name":ingredientName, "amount":1});
    }
  }

  removeFromList(ingredientDict){
    for (var i=0; i<this.shoppinglist.length; i++){
      if (this.shoppinglist[i]==ingredientDict){
        this.shoppinglist.splice(i,1);
      }
    }
  }


  getList(){
    return this.shoppinglist;
  }



}
