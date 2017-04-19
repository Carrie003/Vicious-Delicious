import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Recipes provider. It gathers data retrieved from the server.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Recipes {

  shared: any;

  constructor(public http: Http) {
    this.shared = null;
  }

  /**
   * Load all available recipes from the heroku database.
   * @returns {Promise<T>}
   */
  loadRecipes(){
    return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes')
        .map(res => res.json()) // Converts the information into json format
        .subscribe(shared => { // If it's successful,it takes it input and assigns shared as input's value
          this.shared = shared;
          resolve(this.shared); // Once completed, the promise is resolved
        });
    });

  }


  /**
   * Load all beverage from the heroku database.
   * Similar structure as loadRecipes(), the only difference is the url.
   * @returns {Promise<T>}
   */
  loadBeverage(){

    return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes/beverage')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared;
          resolve(this.shared);
        });
    });
  }

  /**
   * Load all food from the heroku database.
   * Similar structure as loadRecipes, the only difference is the url.
   * @returns {Promise<T>}
   */
  loadFood(){
    return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes/food')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared;
          resolve(this.shared);
        });
    });
  }


  filterItems(searchTerm){
    return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared.filter((item) => { //filter function, keep the item if the following return true
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            //Use indexOf() function to search, which returns -1 if the value is not found.
          });
          resolve(this.shared);
        });
    });
  }

  createRecipe(recipe){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('https://viciousdelicious.herokuapp.com/api/recipes', JSON.stringify(recipe), {headers: headers})

      .subscribe(res => {
        console.log(res.json());
      });

  }

  deleteRecipe(id){

    this.http.delete('https://viciousdelicious.herokuapp.com/api/recipes' + id).subscribe((res) => {
      console.log(res.json());
    });

  }
}
