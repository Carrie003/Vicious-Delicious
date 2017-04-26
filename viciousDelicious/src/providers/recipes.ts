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


  loadRecipes(){

    //if(!this.shared){

      return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared;
          resolve(this.shared);
        });
    });

  }//}

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

  createRecipe(recipe){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('https://viciousdelicious.herokuapp.com/api/recipes', JSON.stringify(recipe), {headers: headers})

      .subscribe(res => {
        console.log(res.json());

      });

    // return new Promise(resolve => {
    //   this.http.get('https://viciousdelicious.herokuapp.com/api/recipes',{headers: headers})
    //     .map(res => res.json())
    //     .subscribe(shared => {
    //       this.shared = shared;
    //       resolve(this.shared);
    //     });
    // });

  }


  imgurAPI(path){
    let headers = new Headers();

    headers.append('Authorization', 'Bearer 518ca848a95862b56d7c8ec501bb779822ee5791');
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





  // giphyAPIUpload(filepath){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   //headers.append('Gifs-API-Key', 'gifs58f9534cbbdbf');
  //   //headers.append('Authentication', 'api_key dc6zaTOxFJmzC');
  //   //console.log("set headers");
  //   //?api_key=dc6zaTOxFJmzC
  //
  //   return new Promise(resolve =>
  //   {this.http.post('http://upload.giphy.com/v1/gifs?api_key=dc6zaTOxFJmzC',
  //     {source_post_url:filepath},
  //     {headers:headers})
  //     .map(res => res.json())
  //     .subscribe(res => {
  //       console.log("Converting to GIF.");
  //       console.log(res);
  //       //this.gifID=res.data.id;
  //       //console.log(res);
  //       resolve(this.gifID);
  //     });
  //   });
  // }
  //
  // giphyAPIget(id){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return new Promise(resolve => {this.http.get('http://api.giphy.com/v1/gifs/'+id+'?api_key=dc6zaTOxFJmzC', {headers:headers})
  //     .map(res => res.json())
  //     .subscribe(res => {
  //       console.log("Get the GIF.");
  //       this.gifUrl=res.data.images.original.url;
  //       console.log(res);
  //       resolve(this.gifUrl)
  //     });
  //   });
  // }



}
