import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Recipes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Recipes {

  shared: any;

  constructor(public http: Http) {
    this.shared = null;
  }


  loadRecipes(){

    return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared;
          resolve(this.shared);
        });
    });

  }

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
          this.shared = shared.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
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
