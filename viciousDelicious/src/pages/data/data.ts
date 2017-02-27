/**
 * Created by XinyuYang on 17/2/25.
 */

export class data{

  shoppinglist: Array<Object>;

  constructor(){
    this.shoppinglist = [{"name":"a","amount":2},{"name":"b","amount":1}];
  }

  addToList(ingredient){
    this.shoppinglist.push(ingredient);
  }

  removeFromList(ingredient){
    for (var i=0; i<this.shoppinglist.length; i++){
      if (this.shoppinglist[i]==ingredient){
        this.shoppinglist.splice(i,1);
      }
    }
  }

  getList(){
    return this.shoppinglist;
  }

}
