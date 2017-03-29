/**
 * Generated to hold data that can be shared in all pages.
 */

export class data{

  shoppinglist: Array<Object>;
  displaylist: Array<Object>;

  constructor(){
    this.shoppinglist=[];
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


  setDisplayList(){
    this.displaylist=[];
    for(var i=0; i<this.shoppinglist.length; i++){
      if(this.shoppinglist[i]["amount"]>0){
        this.displaylist.push(this.shoppinglist[i]);
      }
    }
  }




}
