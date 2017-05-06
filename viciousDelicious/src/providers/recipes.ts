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

  public shared: any;
  public link: any;
  public link1:any;

  constructor(public http: Http) {
    this.shared = null;
    this.link=null;
    this.link1=null;
    console.log("Initiating");
  }

  /**
   * Use promise to get all the recipes from database through our server.
   **/

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


  loadVegetarian(){
    return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes/vegetarian')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared;
          resolve(this.shared);
        });
    });
  }

  loadNonVegetarian(){
    return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes/nonvegetarian')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared;
          resolve(this.shared);
        });
    });
  }

  loadFoodOnly(){

    return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes/food')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared;
          resolve(this.shared);
        });
    });
  }

  loadBeverageOnly(){
    return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes/beverage')
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
            return (item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
          });
          resolve(this.shared);
        });
    });
  }

  filterByIngre(ingreSearchTerm){
    return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared.filter((item) => {
            for(let ingredient of item.ingredients){
              if (ingredient.toLowerCase().indexOf(ingreSearchTerm.toLowerCase()) >-1){
                return true;
              }
            }
            return false;
          });
          resolve(this.shared);
        })
    })
  }

  /**
   * Post a Json file to our database through our server.
   **/

  createRecipe(recipe){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('https://viciousdelicious.herokuapp.com/api/recipes', JSON.stringify(recipe), {headers: headers})

      .subscribe(res => {
        console.log(res.json());

      });

  }

  /**
   * Make a post request to Imgur API to upload the picture and get the direct link.
   **/


  imgurAPI(path){
    let headers = new Headers();

    headers.append('Authorization', 'Bearer 9debb721887090dcb600878ac7d14b751c6272ea');
    headers.append('Content-Type', 'application/json');

    return new Promise(resolve => {
      this.http.post('https://api.imgur.com/3/image', {image: path}, {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          console.log("Posting Img to Imgur");
          this.link = res.data.link;
          console.log(res.data);
          resolve(this.link);
        });
    }).then(function(value){console.log("API successfully get "+ value)});

  }
}
