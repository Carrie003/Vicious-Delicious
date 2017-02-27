/**
 * Created by XinyuYang on 17/2/25.
 */

export class data{

  shoppinglist: Array<Object>;


  constructor(){
    this.shoppinglist=[
    {"name":"Tapioca Pearls",
    "amount":11, "unit":""},
      {"name": "Water",
      "amount": 0, "unit": "g"},
      {"name": "Sugar",
      "amount": 0, "unit": "g"},
      {"name": "Milk Tea",
      "amount": 0, "unit": "g"},
      {"name": "Eggs",
      "amount":0, "unit":""},
      {"name": "Spinach",
      "amount": 0, "unit":""},
      {"name": "Salt",
      "amount": 0, "unit":""},
      {"name": "Pepper",
      "amount": 0, "unit":""},
      {"name": "Oil",
      "amount": 0, "unit":""}
    ]
  }


  addToList(ingredientDict){
    this.shoppinglist.push(ingredientDict);
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
